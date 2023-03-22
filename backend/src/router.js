const express = require("express");
const formidable = require("formidable");
const cors = require("cors");
const path = require("path");

const router = express.Router();

const {
  hashPassword,
  verifyPassword,
  verifyToken,
  verifyId,
  validateForm,
} = require("./auth");

const userControllers = require("./controllers/userControllers");
const regionControllers = require("./controllers/regionControllers");
const jobControllers = require("./controllers/jobControllers");
const skillControllers = require("./controllers/skillControllers");
const userSkillControllers = require("./controllers/userSkillControllers");
const contactControllers = require("./controllers/contactControllers");

// Middleware CORS pour permettre les requêtes cross-origin
router.use(cors());

// Route pour gérer le téléchargement de l'image de l'utilisateur
router.post("/users/:userId/upload", (req, res) => {
  // Créer une nouvelle instance de formidable.IncomingForm
  const form = new formidable.IncomingForm();

  // Configurer le dossier de téléchargement
  form.uploadDir = path.join(__dirname, "uploads");

  // Conserver l'extension de fichier d'origine
  form.keepExtensions = true;

  // Analyser la requête entrante
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur lors du traitement du fichier");
      return;
    }

    // Obtenir le chemin du fichier téléchargé
    const uploadedFilePath = files.user_image.path;

    // Extraire le nom du fichier à partir du chemin
    const fileName = path.basename(uploadedFilePath);

    // Mettre à jour la base de données avec le nom du fichier (si nécessaire)
    // ...

    // Renvoyer le nom du fichier dans la réponse JSON
    res.json({ fileName });
  });
});

// ------ GET pour alimenter sign-up -------
router.get("/regions", regionControllers.browse);
router.get("/jobs", jobControllers.browse);
router.get("/skills", skillControllers.browse);

// -----REGISTER-------
router.post("/users", hashPassword, userControllers.add);
router.post("/user_skills", userSkillControllers.add);

// ------envoi d'email------
router.post("/contact", contactControllers.sendMail);

// -----LOGIN-------
router.post(
  "/users/login",
  validateForm,
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);
// authentication wall : verifyToken is activated for each route after this line
router.use(verifyToken);
// ------GET users-------
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
// -----POST, PUT, DELETE et autres GET -------
router.put("/users/:id", verifyId, hashPassword, userControllers.edit);
router.delete("/users/:id", verifyId, userControllers.destroy);
const userRoleControllers = require("./controllers/userRoleControllers");

router.get("/user_roles", userRoleControllers.browse);
router.get("/user_roles/:id", userRoleControllers.read);
router.put("/user_roles/:id", userRoleControllers.edit);
router.post("/user_roles", userRoleControllers.add);
router.delete("/user_roles/:id", userRoleControllers.destroy);

//  jobs

router.get("/jobs/:id", jobControllers.read);
router.put("/jobs/:id", jobControllers.edit);
router.post("/jobs", jobControllers.add);
router.delete("/jobs/:id", jobControllers.destroy);

const candidacyControllers = require("./controllers/candidacyControllers");

router.get("/candidacies", candidacyControllers.browse);
router.get("/candidacies/:id", candidacyControllers.read);
router.put("/candidacies/:id", candidacyControllers.edit);
router.post("/candidacies", candidacyControllers.add);
router.delete("/candidacies/:id", candidacyControllers.destroy);

router.get("/user_skills", userSkillControllers.browse);
router.get("/user_skills/:id", userSkillControllers.read);
router.put("/user_skills/:id", userSkillControllers.edit);
router.delete("/user_skills/:id", userSkillControllers.destroy);

const projectControllers = require("./controllers/projectControllers");

// projects

router.get("/projects", projectControllers.browse);
router.get("/projects/:id", projectControllers.read);
router.get("/projects_current", projectControllers.filterProjectCurrent);
router.get("/projects_upcoming", projectControllers.filterProjectUpComing);
router.get(
  "/projects_notselected",
  projectControllers.filterProjectNotselected
);
router.get("/projects_all", projectControllers.filterAllProject);
router.put("/projects/:id", projectControllers.edit);
router.post("/projects", projectControllers.add);
router.delete("/projects/:id", projectControllers.destroy);

// skills

router.get("/skills/:id", skillControllers.read);
router.put("/skills/:id", skillControllers.edit);
router.post("/skills", skillControllers.add);
router.delete("/skills/:id", skillControllers.destroy);

// regions

router.get("/regions/:id", regionControllers.read);
router.put("/regions/:id", regionControllers.edit);
router.post("/regions", regionControllers.add);
router.delete("/regions/:id", regionControllers.destroy);

const projectSkillControllers = require("./controllers/projectSkillControllers");

router.get("/project_skills", projectSkillControllers.browse);
router.get("/project_skills/:id", projectSkillControllers.read);
router.put("/project_skills/:id", projectSkillControllers.edit);
router.post("/project_skills", projectSkillControllers.add);
router.delete("/project_skills/:id", projectSkillControllers.destroy);

// END

module.exports = router;
