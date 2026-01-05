// Implementați o metodă put și o metodă delete pe server.

const express = require("express");
const cors = require("cors"); // Permite legătura între HTML și Server
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// "Baza de date" (o listă simplă în memorie)
let entities = [
  { id: 1, name: "Ion", age: 22 },
  { id: 2, name: "Maria", age: 24 },
];

// --- RUTELE (Metodele) ---

// 1. GET (Citește tot)
app.get("/api/getList", (req, res) => {
  res.json(entities);
});

// 2. GET by ID (Citește unul singur - pentru căutare)
app.get("/api/get/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let user = entities.find((item) => item.id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Nu a fost găsit" });
  }
});

// 3. POST (Adaugă)
app.post("/api/postList", (req, res) => {
  let newUser = {
    id: entities.length > 0 ? entities[entities.length - 1].id + 1 : 1, // Auto-increment ID
    name: req.body.name,
    age: req.body.age,
  };
  entities.push(newUser);
  res.json(newUser);
});

// 4. PUT (Modifică) - CERINȚA NOUĂ
app.put("/api/put/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let user = entities.find((item) => item.id === id);

  if (user) {
    // Actualizăm datele
    user.name = req.body.name;
    user.age = req.body.age;
    res.json({ message: "Modificat cu succes", user: user });
  } else {
    res.status(404).json({ message: "Userul nu există" });
  }
});

// 5. DELETE (Șterge) - CERINȚA NOUĂ
app.delete("/api/delete/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let index = entities.findIndex((item) => item.id === id);

  if (index !== -1) {
    entities.splice(index, 1); // Șterge elementul
    res.json({ message: "Șters cu succes" });
  } else {
    res.status(404).json({ message: "Userul nu există" });
  }
});

// Pornim serverul pe portul 8000
app.listen(8000, () => {
  console.log("Serverul a pornit pe portul 8000!");
});
