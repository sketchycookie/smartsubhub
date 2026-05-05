// server/server.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import db from "./db.mjs"; 

// --- Setup __dirname for ES Modules ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Initialize Express App ---
const app = express();

// --- Middleware ---
app.use(express.json());
app.use(cors());

// REGISTER Route
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send({ success: false, message: "All fields required" });
  }

  const sql = "INSERT INTO users(username, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.log("Database error:", err);
      return res.status(500).send({ success: false, message: "Database error" });
    }
    res.send({ success: true, message: "User registered successfully" });
  });
});

// LOGIN Route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ success: false, message: "Email & password required" });
  }

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.log("Database error:", err);
      return res.status(500).send({ success: false, message: "Database error" });
    }

    if (result.length > 0) {
      res.send({ success: true, message: "Login successful" });
    } else {
      res.send({ success: false, message: "Invalid email or password" });
    }
  });
});

// --- Serve React Frontend ---
app.use(express.static(path.join(__dirname, "../dist/public")));

// SPA fallback for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/public/index.html"));
});

// --- Start Server ---
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});