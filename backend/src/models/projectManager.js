const AbstractManager = require("./AbstractManager");

class projectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  insert(project) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      project.title,
    ]);
  }

  update(project) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [project.title, project.id]
    );
  }
}

module.exports = projectManager;
