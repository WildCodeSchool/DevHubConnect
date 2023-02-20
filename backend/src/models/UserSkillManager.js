/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class UserSkillManager extends AbstractManager {
  constructor() {
    super({ table: "user_skill" });
  }

  insert(user_skill) {
    return this.database.query(
      `insert into ${this.table} (user_id, skill_id) values (?,?)`,
      [user_skill.userId, user_skill.skillId]
    );
  }

  update(user_skill) {
    return this.database.query(
      `update ${this.table} set user_id = ?, skill_id = ? where id = ?`,
      [user_skill.userId, user_skill.skillId, user_skill.id]
    );
  }

  delete(userId) {
    return this.database.query(`delete from ${this.table} where user_id = ?`, [
      userId,
    ]);
  }
}

module.exports = UserSkillManager;
