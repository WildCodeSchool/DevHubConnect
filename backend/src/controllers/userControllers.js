const models = require("../models");

const browse = (req, res) => {
  models.user
    .findAllUser()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.user
    .findUser(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// modification d'un utilisateur
const edit = (req, res) => {
  const user = req.body; // récupère les données de l'utilisateur à partir du corps de la requête HTTP

  user.id = parseInt(req.params.id, 10); // assigne à la propriété id de l'objet user la valeur de l'identifiant du user (converti en entier avec une base de 10) qui est envoyé dans la requête HTTP
  const userId = user.id;

  models.user
    .update(user) // appelle la méthode update de l'objet models.user pour mettre à jour les données du user dans la base de données.
    .then(([result]) => {
      if (result.affectedRows === 0) {
        // l'id n'a pas été trouvé dans la table donc réponse avec code d'état 404
        res.sendStatus(404);
      } else {
        const { skillIds } = user; // récupération de la propriété skillIds de l'objet user (destructuration de l'objet)
        models.userSkill
          .delete(userId) // supprime les entrées correspondantes de la table de jointure user_skill
          .then(() => {
            Promise.all(
              // utilisation de la méthode promise.all() qui attend que toutes les insertions soient terminées avant de poursuivre
              skillIds.map((skillId) => {
                // iteration sur tous les éléments du tableau skillIds pour insérer une nouvelle entrée dans la table de jointure pour chaque élément
                return models.userSkill.insert({ userId, skillId });
              })
            )
              .then(() => {
                res.location(`/users/${user.id}`).sendStatus(204);
              })
              .catch((err) => {
                // Si une erreur se produit pendant l'opération de mise à jour, la promesse est rejetée et l'erreur est capturée par le bloc catch.
                console.error(err); // affichage de l'erreur dans la console
                res.sendStatus(500); // réponse HTTP avec le code d'état 500 (Internal Server Error)
              });
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// insertion d'un nouvel utilisateur
const add = (req, res) => {
  const user = req.body; // récupère les données de l'utilisateur à partir du corps de la requête HTTP
  models.user
    .insert(user) // méthode insert pour insérer les données dans la table user
    .then(([result]) => {
      const userId = result.insertId; // récupération de l'ID du nouvel utilisateur
      const { skillIds } = user; // récupération de la propriété skillIds de l'objet user (destructuration de l'objet)
      Promise.all(
        // utilisation de la méthode promise.all() qui attend que toutes les insertions soient terminées avant de poursuivre
        skillIds.map((skillId) => {
          // insertion de chaque skillID dans la table de jointure
          return models.userSkill.insert({ userId, skillId });
        })
      )
        .then(() => {
          // réponse HTTP 201 et route du nouvel utilisateur
          res.location(`/users/${result.insertId}`).sendStatus(201);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// La fonction getUserByEmailWithPasswordAndPassToNext() permet de trouver un utilisateur spécifique en fonction de son adresse e-mail et d'envoyer une réponse 401 si l'utilisateur n'est pas trouvé ou une erreur 500 si une erreur survient lors du traitement des données.
const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;
  models.user
    .findUserByEmail(email)
    .then(([users]) => {
      if (users[0] != null) {
        const [firstUser] = users;
        req.user = firstUser;
        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const destroy = (req, res) => {
  const userId = req.params.id; // recupere l'id de l'utilisateur à supprimer
  models.userSkill
    .delete(userId) // supprime toutes les entrées contenant cet id dans la table de jointure
    .then(() => {
      return models.user.delete(userId); // supprime l'utilisateur
    })
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  getUserByEmailWithPasswordAndPassToNext,
};
