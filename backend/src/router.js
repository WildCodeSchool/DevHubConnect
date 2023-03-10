const express = require("express");

const router = express.Router();

const {
  hashPassword,
  verifyPassword,
  verifyToken,
  verifyId,
} = require("./auth");

// VERIFIE

const userControllers = require("./controllers/userControllers");
// -----REGISTER-------
router.post("/users", hashPassword, userControllers.add);
router.post(
  "/users/login",
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

const jobControllers = require("./controllers/jobControllers");

router.get("/jobs", jobControllers.browse);
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

const userSkillControllers = require("./controllers/userSkillControllers");

router.get("/user_skills", userSkillControllers.browse);
router.get("/user_skills/:id", userSkillControllers.read);
router.put("/user_skills/:id", userSkillControllers.edit);
router.post("/user_skills", userSkillControllers.add);
router.delete("/user_skills/:id", userSkillControllers.destroy);

const projectControllers = require("./controllers/projectControllers");

router.get("/projects", projectControllers.browse);
router.get("/projects/:id", projectControllers.read);
router.put("/projects/:id", projectControllers.edit);
router.post("/projects", projectControllers.add);
router.delete("/projects/:id", projectControllers.destroy);

const skillControllers = require("./controllers/skillControllers");

router.get("/skills", skillControllers.browse);
router.get("/skills/:id", skillControllers.read);
router.put("/skills/:id", skillControllers.edit);
router.post("/skills", skillControllers.add);
router.delete("/skills/:id", skillControllers.destroy);

const regionControllers = require("./controllers/regionControllers");

router.get("/regions", regionControllers.browse);
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
