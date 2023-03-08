/* eslint-disable prettier/prettier */
// Import des modules Node.js nécessaires

const fs = require("node:fs");
const path = require("node:path");

// Création de l'application Express

const express = require("express");

const app = express();

// Utilisation de middlewares d'application

app.use(express.json());

const cors = require("cors");

// Cross-origin resource sharing (CORS) Accéder à des ressources d'un serveur situé sur une autre origine que le site courant
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL ?? "http://localhost:3000",
      "http://127.0.0.1:5173",
    ],
    optionsSuccessStatus: 200,
  })
);

// Import et montage des routes de l'API

const router = require("./router");

app.use(router);

// Serveur de fichiers statiques dans le dossier "public" du backend

app.use(express.static(path.join(__dirname, "../public")));

// Serveur de fichiers statiques pour l'application React

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);
if (fs.existsSync(reactIndexFile)) {
  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

  // Redirection de toutes les requêtes vers le fichier index.html de React
  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// Export de l'application Express
module.exports = app;
