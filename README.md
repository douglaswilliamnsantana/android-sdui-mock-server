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
# 1. Install dependencies
npm install

# 2. Run in development mode (hot reload)
npm run dev

# 3. Or run in production mode
npm start
```

After starting, the terminal will show:

```
🚀 SDUI Mock Server running at http://localhost:3000
📖 Swagger UI:         http://localhost:3000/docs
📄 Swagger JSON:       http://localhost:3000/docs.json
```

---

## Project Structure / Estrutura do Projeto

```
android-sdui-mock-server/
├── src/
│   ├── index.js              → Express server entry point + Swagger setup
│   ├── swagger.js            → OpenAPI 3.0 spec configuration
│   ├── routes/
│   │   └── screens.js        → Registers screen endpoints
│   └── screens/
│       └── home.js           → Home screen Node tree
├── eslint.config.js          → ESLint v9 flat config
├── package.json
└── .gitignore
```

### How it works / Como funciona

```
npm run dev
      │
      ▼
src/routes/screens.js
      │
      ├── GET /screens         → returns the list of registered screens
      │
      └── GET /screens/home    → returns the Home screen Node tree
```

EN: Each screen file inside `src/screens/` must be explicitly imported and registered as a route in `src/routes/screens.js`.

PT: Cada arquivo de tela em `src/screens/` deve ser explicitamente importado e registrado como rota em `src/routes/screens.js`.

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

Follow these 3 steps to add a new screen.

### Step 1 — Create the screen file / Crie o arquivo da tela

Create a new `.js` file inside `src/screens/` named after the screen:

```bash
touch src/screens/settings.js
```

### Step 2 — Define the Node tree / Defina a árvore de Nodes

Open the file and export a Node object:

```js
/**
 * Settings Screen
 *
 * EN: Node tree for the Settings screen.
 * PT: Árvore de Nodes para a tela Settings.
 */
const settings = {
  type: "text",
  props: {
    text: "Settings",
    style: {
      padding: { start: 24, end: 24, top: 32, bottom: 0 },
      color: "#1A202C",
      fontSize: 22,
      fontWeight: "semi-bold",
    },
  },
};

module.exports = settings;
```

### Step 3 — Register the route / Registre a rota

Open `src/routes/screens.js` and add the import and the two new routes:

```js
const settings = require("../screens/settings");

// Add to GET /screens list:
{ id: "settings", path: "/screens/settings" }

// Add new route:
router.get("/settings", (req, res) => {
  res.json(settings);
});
```

### Done! / Pronto!

After saving and restarting, the new endpoint will be available:

```
→ http://localhost:3000/screens/settings
```

---

## Node Structure / Estrutura do Node

EN: Each screen exports a `Node` object. The Node structure must match the `Node` model in the Android app (`com.douglassantana.sdui_core.Node`).

PT: Cada tela exporta um objeto `Node`. A estrutura do Node deve corresponder ao modelo `Node` do app Android (`com.douglassantana.sdui_core.Node`).

```js
{
  type: "text",         // Required — must match ComponentFactory.type() in Android
  props: {              // Optional — arbitrary properties read by the Factory
    text: "Hello SDUI",
    style: {
      padding: {
        start: 24,
        end: 24,
        top: 32,
        bottom: 0,
      },
      color: "#1A202C",
      fontSize: 22,
      fontWeight: "semi-bold",
    },
  },
  children: [],         // Optional — nested Nodes, rendered recursively
}
```

---

## Available Component Types / Tipos de Componentes Disponíveis

| Type | Props | Description |
|---|---|---|
| `text` | `text: String`, `style.color: String`, `style.fontSize: Int`, `style.fontWeight: String`, `style.padding.start/end/top/bottom: Int` | Text label with optional styling |

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start with nodemon (hot reload) |
| `npm start` | Start without hot reload |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint and auto-fix issues |

---

## CI/CD

The project uses GitHub Actions to validate the server on every push or pull request.

**Workflow:** `.github/workflows/mock-server-ci.yml`

| Step | What it does |
|---|---|
| Setup Node.js v24 | Installs the correct Node version |
| `npm install` | Installs all dependencies |
| ESLint | Validates code style and errors |
| Server validation | Starts the server and checks `/screens`, `/screens/home` and `/docs.json` via `curl` |

---

## Swagger

EN: The Swagger UI provides interactive documentation for all available endpoints.
PT: O Swagger UI fornece documentação interativa de todos os endpoints disponíveis.

Access at: `http://localhost:3000/docs`

---