const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  insert(project) {
    return this.database.query(
      `insert into ${this.table} (project_name, project_start_date, project_end_date, project_image, project_about, project_description, project_state, project_remote, region_id, creator_id) values (?,?,?,?,?,?,?,?,?,?)`,
      [
        project.project_name,
        project.project_start_date,
        project.project_end_date,
        project.project_image,
        project.project_about,
        project.project_description,
        project.project_state,
        project.project_remote,
        project.region_id,
        project.creator_id,
      ]
    );
  }

  update(project) {
    return this.database.query(
      `update ${this.table} set project_name = ?, project_start_date = ?, project_end_date = ?, project_image = ?, project_about = ?, project_description = ?, project_state = ?, project_remote = ?, region_id = ?, creator_id = ? where id = ?`,
      [
        project.project_name,
        project.project_start_date,
        project.project_end_date,
        project.project_image,
        project.project_about,
        project.project_description,
        project.project_state,
        project.project_remote,
        project.region_id,
        project.creator_id,
        project.id,
      ]
    );
  }

  findCurrentProjects(project) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE project_start_date <= CURDATE() AND project_end_date >= CURDATE() `,
      [
        project.project_start_date,
        project.project_end_date,
        project.project_state,
      ]
    );
  }

  findUpComingProjects(project) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE project_start_date >= CURDATE()`,
      [
        project.project_start_date,
        project.project_end_date,
        project.project_state,
      ]
    );
  }

  findNotselectedProjects(project) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE project_end_date <= CURDATE()`,
      [
        project.project_start_date,
        project.project_end_date,
        project.project_state,
      ]
    );
  }

  findAllProjects() {
    return this.database.query(`SELECT * FROM ${this.table} `);
  }
}

module.exports = ProjectManager;
