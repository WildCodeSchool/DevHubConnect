const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  insert(project) {
    return this.database.query(
      `insert into ${this.table} (project_name, project_start_date, project_end_date, project_image, project_description, project_state, project_remote, region_id) values (?,?,?,?,?,?,?,?)`,
      [
        project.project_name,
        project.project_start_date,
        project.project_end_date,
        project.project_image,
        project.project_description,
        project.project_state,
        project.project_remote,
        project.region_id,
      ]
    );
  }

  update(project) {
    return this.database.query(
      `update ${this.table} set project_name = ?, project_start_date = ?, project_end_date = ?, project_image = ?, project_description = ?, project_state = ?, project_remote = ?, region_id = ? where id = ?`,
      [
        project.project_name,
        project.project_start_date,
        project.project_end_date,
        project.project_image,
        project.project_description,
        project.project_state,
        project.project_remote,
        project.region_id,
        project.id,
      ]
    );
  }

  findCurrent() {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE project_start_date <= curdate() AND project_end_date >= curdate()`
    );
  }
}

module.exports = ProjectManager;
