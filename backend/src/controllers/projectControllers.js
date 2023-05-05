const models = require("../models");

const browse = (req, res) => {
  models.project
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.project
    .find(req.params.id)
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

// modification d'un projet

const edit = (req, res) => {
  const project = req.body; // récupère les données du projet à partir du corps de la requête HTTP

  project.id = parseInt(req.params.id, 10); // assigne à la propriété id de l'objet project la valeur de l'identifiant du projet (converti en entier avec une base de 10) qui est envoyé dans la requête HTTP
  const projectId = project.id;

  models.project
    .update(project) // appelle la méthode update de l'objet models.project pour mettre à jour les données du projet dans la base de données.
    .then(([result]) => {
      if (result.affectedRows === 0) {
        // l'id n'a pas été trouvé dans la table donc réponse avec code d'état 404
        res.sendStatus(404);
      } else {
        const { skillIds } = project; // récupération de la propriété skillIds de l'objet project (destructuration de l'objet)
        models.projectSkill
          .delete(projectId) // supprime les entrées correspondantes de la table de jointure project_skill
          .then(() => {
            Promise.all(
              // utilisation de la méthode promise.all() qui attend que toutes les insertions soient terminées avant de poursuivre
              skillIds.map((skillId) => {
                // iteration sur tous les éléments du tableau skillIds pour insérer une nouvelle entrée dans la table de jointure pour chaque élément
                return models.projectSkill.insert({ projectId, skillId });
              })
            )
              .then(() => {
                res.location(`/projects/${result.insertId}`).sendStatus(204); // Si toutes les promesses d'insertion dans la table de jointure project_skill sont résolues avec succès, la fonction envoie une réponse HTTP avec le code d'état 204
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

// insertion d'un nouveau projet
const add = (req, res) => {
  const project = req.body; // récupère les données du projet à partir du corps de la requête HTTP

  models.project
    .insert(project) // méthode insert pour insérer les données dans la table project
    .then(([result]) => {
      const projectId = result.insertId; // récupération de l'ID du nouveau projet
      const { skillIds } = project; // récupération de la propriété skillIds de l'objet project (destructuration de l'objet)

      Promise.all(
        // utilisation de la méthode promise.all() qui attend que toutes les insertions soient terminées avant de poursuivre
        skillIds.map((skillId) => {
          // insertion de chaque skillID dans la table de jointure
          return models.projectSkill.insert({ projectId, skillId });
        })
      )
        .then(() => {
          // réponse HTTP 201 et route du nouveau projet
          // res.location(`/projects/${result.insertId}`).sendStatus(201); // commenté en attendant de pouvoir récupérer location
          res.send(`${result.insertId}`).status(201);
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

// suppression d'un projet
const destroy = (req, res) => {
  const projectId = req.params.id; // recupere l'id du projet à supprimer
  models.projectSkill
    .delete(projectId) // supprime toutes les entrées contenant cet id dans la table de jointure
    .then(() => {
      return models.project.delete(projectId); // supprime le projet
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

// Filtrer les projets en cours

const filterProjectCurrent = (req, res) => {
  models.project
    .findCurrentProjects(req)
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Filtrer les projets à venir

const filterProjectUpComing = (req, res) => {
  models.project
    .findUpComingProjects(req)
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Filtrer les projets non retenus

const filterProjectNotselected = (req, res) => {
  models.project
    .findNotselectedProjects(req)
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Filtrer tous les projets

const filterAllProject = (req, res) => {
  models.project
    .findAllProjects(req)
    .then((rows) => {
      res.send(rows);
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
  filterProjectCurrent,
  filterProjectUpComing,
  filterProjectNotselected,
  filterAllProject,
};
