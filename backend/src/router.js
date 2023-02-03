const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

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
