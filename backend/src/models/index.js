require("dotenv").config();

const mysql = require("mysql2/promise");

// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// try a connection

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

// declare and fill models : that's where you should register your own managers

const models = {};

const ItemManager = require("./ItemManager");

models.item = new ItemManager();
models.item.setDatabase(pool);

// user
const UserManager = require("./UserManager");

models.user = new UserManager();
models.user.setDatabase(pool);

// Skill
const SkillManager = require("./SkillManager");

models.skill = new SkillManager();
models.skill.setDatabase(pool);

// Candidacy
const CandidacyManager = require("./CandidacyManager");

models.candidacy = new CandidacyManager();
models.candidacy.setDatabase(pool);

// Projects
const ProjectManager = require("./ProjectManager");

models.project = new ProjectManager();
models.project.setDatabase(pool);

// UserRole
const UserRoleManager = require("./UserRoleManager");

models.userRole = new UserRoleManager();
models.userRole.setDatabase(pool);

// UserSkill
const UserSkillManager = require("./UserSkillManager");

models.userSkill = new UserSkillManager();
models.userSkill.setDatabase(pool);

// Job
const JobManager = require("./JobManager");

models.job = new JobManager();
models.job.setDatabase(pool);

// Region
const RegionManager = require("./RegionManager");

models.region = new RegionManager();
models.region.setDatabase(pool);

// Project Skill
const ProjectSkillManager = require("./ProjectSkillManager");

models.projectSkill = new ProjectSkillManager();
models.projectSkill.setDatabase(pool);

// bonus: use a proxy to personalize error message,
// when asking for a non existing model

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
