const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const screensRouter = require("./routes/screens");

const app = express();
const PORT = 3000;

app.use(express.json());

// ─── Middleware: Log ───────────────────────────────────────
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// ─── Swagger ──────────────────────────────────────────────
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customSiteTitle: "Android SDUI — API Docs",
    customCss: `
      .topbar { background-color: #2A3F5F; }
      .topbar-wrapper img { display: none; }
      .topbar-wrapper::after {
        content: "Android SDUI Mock Server";
        color: #fff;
        font-size: 18px;
        font-weight: 600;
      }
    `,
  })
);

app.get("/docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

// ─── Routes ───────────────────────────────────────────────
app.use("/screens", screensRouter);

// ─── 404 Handler ──────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

// ─── Start ────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 SDUI Mock Server running at http://localhost:${PORT}`);
  console.log(`📖 Swagger UI:         http://localhost:${PORT}/docs`);
  console.log(`📄 Swagger JSON:       http://localhost:${PORT}/docs.json`);
  console.log("");
});
