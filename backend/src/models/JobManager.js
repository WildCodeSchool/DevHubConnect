const AbstractManager = require("./AbstractManager");

class JobManager extends AbstractManager {
  constructor() {
    super({ table: "job" });
  }

  insert(job) {
    return this.database.query(
      `insert into ${this.table} (job_name) values (?)`,
      [job.job_name]
    );
  }

  update(job) {
    return this.database.query(
      `update ${this.table} set job_name = ? where id = ?`,
      [job.job_name, job.id]
    );
  }
}

module.exports = JobManager;
