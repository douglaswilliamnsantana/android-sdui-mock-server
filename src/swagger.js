const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Android SDUI Mock Server",
      version: "1.0.0",
      description:
        "EN: Mock server that serves screen Node trees for the Android SDUI app.\n\nPT: Servidor mock que serve as árvores de Nodes das telas para o app Android SDUI.",
      contact: {
        name: "Douglas Santana",
        url: "https://github.com/douglaswilliamnsantana/android-sdui",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local development server",
      },
    ],
    components: {
      schemas: {
        Node: {
          type: "object",
          required: ["type"],
          properties: {
            type: {
              type: "string",
              description:
                "EN: Component type identifier. Must match ComponentFactory.type() in Android.\nPT: Identificador do tipo do componente. Deve corresponder ao ComponentFactory.type() no Android.",
              example: "column",
            },
            props: {
              type: "object",
              description:
                "EN: Arbitrary component properties.\nPT: Propriedades arbitrárias do componente.",
              example: { paddingAll: 16 },
            },
            children: {
              type: "array",
              description:
                "EN: Nested child nodes, rendered recursively.\nPT: Nós filhos aninhados, renderizados recursivamente.",
              items: {
                $ref: "#/components/schemas/Node",
              },
            },
          },
        },
        ScreenItem: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Screen identifier",
              example: "home",
            },
            path: {
              type: "string",
              description: "Screen endpoint path",
              example: "/screens/home",
            },
          },
        },
        ScreenList: {
          type: "object",
          properties: {
            screens: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ScreenItem",
              },
            },
          },
        },
        ErrorResponse: {
          type: "object",
          properties: {
            error: {
              type: "string",
              example: "Screen \"unknown\" not found.",
            },
            available: {
              type: "array",
              items: { type: "string" },
              example: ["home", "design-system", "profile"],
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
