const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (cp, firstname, lastname, email, biography, about, user_image, hashedPassword, github_page, experience, user_role_id, job_id, region_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.cp,
        user.firstname,
        user.lastname,
        user.email,
        user.biography,
        user.about,
        user.user_image,
        user.hashedPassword,
        user.github_page,
        user.experience,
        user.user_role_id,
        user.job_id,
        user.region_id,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set cp = ?, firstname = ?, lastname = ?, email = ?, biography = ?, about = ?, user_image = ?, hashedPassword = ?, github_page = ?, experience = ?, user_role_id = ?, job_id = ?, region_id = ? where id = ?`,
      [
        user.cp,
        user.firstname,
        user.lastname,
        user.email,
        user.biography,
        user.about,
        user.user_image,
        user.hashedPassword,
        user.github_page,
        user.experience,
        user.user_role_id,
        user.job_id,
        user.region_id,
        user.id,
      ]
    );
  }

  findUser(email) {
    return this.database.query(`select * from  ${this.table} where email = ?`, [
      email,
    ]);
  }
}

module.exports = UserManager;
