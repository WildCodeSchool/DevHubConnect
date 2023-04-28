// Importer la bibliothèque multer
const multer = require("multer");
// Définir le répertoire où les fichiers seront stockés, la taille maximale autorisée (2 Mo),
// et les types de fichiers autorisés (images JPEG, PNG, GIF et SVG)
const directory = "../frontend/src/assets/projects-img/";
const maxFileSize = 2 * 1024 * 1024;
const allowedMimeTypes = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/svg+xml",
];

// Définir une fonction de filtre de fichier qui vérifie que le type de fichier est autorisé
// et que la taille ne dépasse pas la limite autorisée
const fileFilter = (req, file, callback) => {
  const fileSize = parseInt(req.headers["content-length"], 10);
  const isAllowedFileType = allowedMimeTypes.includes(file.mimetype);

  if (isAllowedFileType && fileSize <= maxFileSize) {
    callback(null, true);
  }
};

// Définir l'emplacement et le nom de fichier de destination
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, directory);
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    callback(null, `${Date.now()}_${name}`);
  },
});

// Exporter un middleware multer configuré avec les options de stockage et de filtre de fichier
// et configuré pour gérer un seul fichier à la fois avec le nom de champ "upload"
// notation de raccourci d'objet : multer({ storage: storage, fileFilter: fileFilter }) il faut :
module.exports = multer({ storage, fileFilter }).single("upload");
