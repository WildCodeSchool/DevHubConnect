/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class ProjectSkillManager extends AbstractManager {
  constructor() {
    super({ table: "project_skill" });
  }

  insert(project_skill) {
    return this.database.query(
      `insert into ${this.table} (project_skill.project_id, project_skill.skill_id) values (?,?)`,
      [project_skill.projectId, project_skill.skillId]
    );
  }

  update(project_skill) {
    return this.database.query(
      `update ${this.table} set project_id = ?, skill_id = ? where id = ?`,
      [project_skill.projectId, project_skill.skillId, project_skill.id]
    );
  }

  delete(projectId) {
    return this.database.query(
      `delete from ${this.table} where project_id = ?`,
      [projectId]
    );
  }
}

module.exports = ProjectSkillManager;
