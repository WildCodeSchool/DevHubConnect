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

module.exports = router;
