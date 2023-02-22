const AbstractManager = require("./AbstractManager");

class CandidacyManager extends AbstractManager {
  constructor() {
    super({ table: "candidacy" });
  }

  insert(candidacy) {
    return this.database.query(
      `insert into ${this.table} (user_id, project_id, apply_date, user_status, user_motivation) values (?, ?, ?, ?, ?)`,
      [
        candidacy.user_id,
        candidacy.project_id,
        candidacy.apply_date,
        candidacy.user_status,
        candidacy.user_motivation,
      ]
    );
  }

  update(candidacy) {
    return this.database.query(
      `update ${this.table} set user_id = ?, project_id = ?, apply_date = ?, user_status = ?, user_motivation = ? where id = ?`,
      [
        candidacy.user_id,
        candidacy.project_id,
        candidacy.apply_date,
        candidacy.user_status,
        candidacy.user_motivation,
        candidacy.id,
      ]
    );
  }
}

module.exports = CandidacyManager;
