const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("database.sqlite");

db.run(`
  CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    date TEXT
  )
`);

app.post("/appointments", (req, res) => {
  const { name, email, date } = req.body;

  db.run(
    "INSERT INTO appointments (name, email, date) VALUES (?, ?, ?)",
    [name, email, date],
    () => res.json({ success: true })
  );
});

app.get("/appointments", (req, res) => {
  db.all("SELECT * FROM appointments", [], (err, rows) => {
    res.json(rows);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));