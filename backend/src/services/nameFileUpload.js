// Fonction pour gérer la réponse HTTP une fois que le fichier a été uploadé avec succès
const fileUploaded = (req, res) => {
  // Renvoyer un code de statut 200 (OK) avec le nom du fichier dans la réponse
  res.status(200).json({ filename: req.file.filename });
};
module.exports = fileUploaded;
