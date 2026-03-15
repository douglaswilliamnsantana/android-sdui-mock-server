# Android SDUI — Mock Server

> EN: Node.js/Express mock server that serves screen Node trees for the Android SDUI app.
>
> PT: Servidor mock Node.js/Express que serve as árvores de Nodes das telas para o app Android SDUI.

---

## Requirements / Requisitos

| Tool | Version |
|---|---|
| Node.js | v24.13.1 |
| npm | 11.11.1 |

---

## Setup

```bash
# 1. Clone or download the project
git clone https://github.com/douglaswilliamnsantana/android-sdui.git
cd android-sdui/mock-server

# 2. Install dependencies
npm install

# 3. Run in development mode (hot reload)
npm run dev

# 4. Or run in production mode
npm start
```

After starting, the terminal will show:

```
🚀 SDUI Mock Server running at http://localhost:3000
📖 Swagger UI:   http://localhost:3000/docs
📄 Swagger JSON: http://localhost:3000/docs.json

📋 Screens auto-discovered (1):
   → http://localhost:3000/screens/home
```

---

## Project Structure / Estrutura do Projeto

```
android-sdui-mock-server/
├── src/
│   ├── index.js              → Express server entry point + Swagger setup
│   ├── swagger.js            → OpenAPI 3.0 spec configuration
│   ├── routes/
│   │   └── screens.js        → Auto-discovery: registers one endpoint per screen file
│   └── screens/
│       ├── index.js          → Aggregates all screen definitions
│       └── home.js           → Home screen Node tree
├── package.json
└── .gitignore
```

### How it works / Como funciona

```
nodemon starts
      │
      ▼
src/routes/screens.js
      │
      ├── reads all .js files from src/screens/ (except index.js)
      │
      ├── for each file → registers GET /screens/<filename>
      │
      └── GET /screens → returns the auto-generated list
```

EN: No manual route registration needed. Adding a new `.js` file to `src/screens/` is enough.
PT: Nenhum registro manual de rota necessário. Basta adicionar um novo arquivo `.js` em `src/screens/`.

---

## Available Endpoints / Endpoints Disponíveis

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/screens` | Lists all auto-discovered screens |
| `GET` | `/screens/home` | Returns the Home screen Node tree |
| `GET` | `/docs` | Swagger UI (interactive docs) |
| `GET` | `/docs.json` | OpenAPI spec in JSON format |

---

## How to Create a New Screen / Como Criar uma Nova Tela

Follow these 2 steps to add a new screen. No other file needs to be changed.

### Step 1 — Create the screen file / Crie o arquivo da tela

Create a new `.js` file inside `src/screens/` named after the screen:

```bash
touch src/screens/settings.js
```

### Step 2 — Define the Node tree / Defina a árvore de Nodes

Open the file and export a Node object following this structure:

```js
/**
 * Settings Screen
 *
 * EN: Node tree for the Settings screen.
 * PT: Árvore de Nodes para a tela Settings.
 */
const settings = {
  type: "column",
  props: {
    paddingAll: 16,
  },
  children: [
    {
      type: "text",
      props: {
        text: "Settings",
      },
    },
    {
      type: "text",
      props: {
        text: "Manage your preferences here.",
      },
    },
  ],
};

module.exports = settings;
```

### Done! / Pronto!

After saving the file, nodemon will restart automatically and the new endpoint will be available:

```
📋 Screens auto-discovered (2):
   → http://localhost:3000/screens/home
   → http://localhost:3000/screens/settings
```

---

## Node Structure / Estrutura do Node

EN: Each screen exports a `Node` object. The Node structure must match the `Node` model in the Android app.
PT: Cada tela exporta um objeto `Node`. A estrutura do Node deve corresponder ao modelo `Node` do app Android.

```js
{
  type: "column",       // Required — must match ComponentFactory.type() in Android
  props: {              // Optional — arbitrary properties read by the Factory
    paddingAll: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
    paddingTop: 8,
    paddingBottom: 8,
    paddingStart: 16,
    paddingEnd: 16,
  },
  children: [           // Optional — nested Nodes, rendered recursively
    {
      type: "text",
      props: { text: "Hello" },
    }
  ],
}
```

---

## Available Component Types / Tipos de Componentes Disponíveis

| Type | Props | Description |
|---|---|---|
| `text` | `text: String` | Simple text label |
| `column` | `paddingAll`, `paddingHorizontal`, `paddingVertical`, `paddingTop`, `paddingBottom`, `paddingStart`, `paddingEnd` | Vertical layout container |

---

## Swagger

EN: The Swagger UI provides interactive documentation for all available endpoints.
PT: O Swagger UI fornece documentação interativa de todos os endpoints disponíveis.

Access at: `http://localhost:3000/docs`

---