const AbstractManager = require("./AbstractManager");

class SkillManager extends AbstractManager {
  constructor() {
    super({ table: "skill" });
  }

  insert(skill) {
    return this.database.query(
      `insert into ${this.table} (skill_name) values (?)`,
      [skill.skill_name]
    );
  }

  update(skill) {
    return this.database.query(
      `update ${this.table} set skill_name = ? where id = ?`,
      [skill.skill_name, skill.id]
    );
  }
}

module.exports = SkillManager;
