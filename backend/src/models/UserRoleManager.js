/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class UserRoleManager extends AbstractManager {
  constructor() {
    super({ table: "user_role" });
  }

  insert(user_role) {
    return this.database.query(
      `insert into ${this.table} (role_name) values (?)`,
      [user_role.role_name]
    );
  }

  update(user_role) {
    return this.database.query(
      `update ${this.table} set role_name = ? where id = ?`,
      [user_role.role_name, user_role.id]
    );
  }
}

module.exports = UserRoleManager;
