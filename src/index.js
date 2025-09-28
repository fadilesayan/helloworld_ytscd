import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(cors());
app.use(express.json());

// GET /hello?name=Adin
app.get("/hello", (req, res) => {
  const name = (req.query.name ?? "World").toString();
  res.json({ message: `Hello, ${name}` });
});

// POST /hello  Body: { "name": "Adin" }
app.post("/hello", (req, res) => {
  const name = (req.body?.name ?? "World").toString();
  res.json({ message: `Hello, ${name}` });
});

// Sağlık kontrolü
app.get("/", (_req, res) => {
  res.send("Benim adım Fadile");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
