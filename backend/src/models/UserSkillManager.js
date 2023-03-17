/* eslint-disable camelcase */
// Import de la classe AbstractManager pour hériter ses propriétés et méthodes
const AbstractManager = require("./AbstractManager");

// Déclaration de la classe UserSkillManager qui hérite de la classe AbstractManager
class UserSkillManager extends AbstractManager {
  // Constructeur qui appelle le constructeur parent pour définir la table à utiliser
  constructor() {
    super({ table: "user_skill" });
  }

  // Méthode pour insérer un nouveau skill pour un utilisateur dans la table user_skill
  insert(user_skill) {
    // Exécution de la requête SQL pour insérer les données dans la table user_skill
    return this.database.query(
      `insert into ${this.table} (user_id, skill_id) values (?,?)`,
      [user_skill.userId, user_skill.skillId]
    );
  }

  // Méthode pour mettre à jour un skill pour un utilisateur dans la table user_skill
  update(user_skill) {
    // Exécution de la requête SQL pour mettre à jour les données dans la table user_skill
    return this.database.query(
      `update ${this.table} set user_id = ?, skill_id = ? where id = ?`,
      [user_skill.userId, user_skill.skillId, user_skill.id]
    );
  }

  delete(userId, skillId) {
    return this.database.query(
      `delete from ${this.table} where user_id = ? and skill_id = ?`,
      [userId, skillId]
    );
  }
}

// Export de la classe UserSkillManager pour pouvoir l'utiliser dans d'autres fichiers
module.exports = UserSkillManager;
