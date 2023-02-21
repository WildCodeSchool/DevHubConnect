// Ce code définit la classe UserManager qui étend la classe AbstractManager. La classe UserManager a un constructeur qui prend un objet avec une propriété "table" et appelle le constructeur de la classe parente. La classe UserManager a ensuite trois méthodes: insert, update et findUser. La méthode insert prend un objet user en paramètre et insère ses données dans la table user. La méthode update fait la même chose, mais met à jour les données existantes. Enfin, la méthode findUser prend un email en paramètre et retourne les données correspondantes de l'utilisateur dans la table user

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

  findUserByEmail(email) {
    return this.database.query(`select * from  ${this.table} where email = ?`, [
      email,
    ]);
  }

  // Sélection de all user sans le hachedpassword
  findAllUser() {
    return this.database.query(
      `select id, cp, firstname, lastname, email, biography, about, user_image, github_page, experience, user_role_id, job_id, region_id from user`
    );
  }

  // Sélection d'un user sans le hachedpassword
  findUser(id) {
    return this.database.query(
      `select id, cp, firstname, lastname, email, biography, about, user_image, github_page, experience, user_role_id, job_id, region_id from user where id = ?`,
      [id]
    );
  }
}

module.exports = UserManager;
