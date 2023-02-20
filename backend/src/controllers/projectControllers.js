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

const edit = (req, res) => {
  const project = req.body;

  // TODO validations (length, format...)

  project.id = parseInt(req.params.id, 10);

  models.project
    .update(project)
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

const add = (req, res) => {
  const project = req.body;

  // TODO validations (length, format...)

  models.project
    .insert(project)
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
          res.location(`/projects/${result.insertId}`).sendStatus(201);
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

const destroy = (req, res) => {
  models.project
    .delete(req.params.id)
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
};
