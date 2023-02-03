/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class UserSkillManager extends AbstractManager {
  constructor() {
    super({ table: "user_skill" });
  }

  insert(user_skill) {
    return this.database.query(
      `insert into ${this.table} (user_id, skill_id) values (?,?)`,
      [user_skill.user_id, user_skill.skill_id]
    );
  }

  update(user_skill) {
    return this.database.query(
      `update ${this.table} set user_id = ?, skill_id = ? where id = ?`,
      [user_skill.user_id, user_skill.skill_id, user_skill.id]
    );
  }
}

module.exports = UserSkillManager;
