/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class projectSkillManager extends AbstractManager {
  constructor() {
    super({ table: "project_skill" });
  }

  insert(project_skill) {
    return this.database.query(
      `insert into ${this.table} (project_id, skill_id) values (?,?)`,
      [project_skill.project_id, project_skill.skill_id]
    );
  }

  update(project_skill) {
    return this.database.query(
      `update ${this.table} set project_id = ?, skill_id = ? where id = ?`,
      [project_skill.project_id, project_skill.skill_id, project_skill.id]
    );
  }
}

module.exports = projectSkillManager;
