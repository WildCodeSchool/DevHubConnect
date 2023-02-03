/* eslint-disable prettier/prettier */
const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const jobControllers = require("./controllers/jobControllers");

router.get("/jobs", jobControllers.browse);
router.get("/jobs/:id", jobControllers.read);
router.put("/jobs/:id", jobControllers.edit);
router.post("/jobs", jobControllers.add);
router.delete("/jobs/:id", jobControllers.destroy);

const skillControllers = require("./controllers/skillControllers");

router.get("/skills", skillControllers.browse);
router.get("/skills/:id", skillControllers.read);
router.put("/skills/:id", skillControllers.edit);
router.post("/skills", skillControllers.add);
router.delete("/skills/:id", skillControllers.destroy);

const candidacyControllers = require("./controllers/candidacyControllers");

router.get("/candidacies", candidacyControllers.browse);
router.get("/candidacies/:id", candidacyControllers.read);
router.put("/candidacies/:id", candidacyControllers.edit);
router.post("/candidacies", candidacyControllers.add);
router.delete("/candidacies/:id", candidacyControllers.destroy);

const projectControllers = require("./controllers/projectControllers");

router.get("/projects", projectControllers.browse);
router.get("/projects/:id", projectControllers.read);
router.put("/projects/:id", projectControllers.edit);
router.post("/projects", projectControllers.add);
router.delete("/projects/:id", projectControllers.destroy);

const userRoleControllers = require("./controllers/userRoleControllers");

router.get("/user_roles", userRoleControllers.browse);
router.get("/user_roles/:id", userRoleControllers.read);
router.put("/user_roles/:id", userRoleControllers.edit);
router.post("/user_roles", userRoleControllers.add);
router.delete("/user_roles/:id", userRoleControllers.destroy);

const userSkillControllers = require("./controllers/userSkillControllers");

router.get("/user_skills", userSkillControllers.browse);
router.get("/user_skills/:id", userSkillControllers.read);
router.put("/user_skills/:id", userSkillControllers.edit);
router.post("/user_skills", userSkillControllers.add);
router.delete("/user_skills/:id", userSkillControllers.destroy);

module.exports = router;
