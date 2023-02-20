/* eslint-disable no-restricted-syntax */
/* eslint-disable no-const-assign */
/* eslint-disable prefer-destructuring */
/* eslint-disable spaced-comment */
const models = require("../models");

const browse = (req, res) => {
  models.user
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
  models.user
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

// @FRED L => il faut arriver a détruire les tuples qui comprennent l'id de l'USER modifié et créer les nouveaux tuples avec l'attribut "skillIds" : [3,4]
const edit = (req, res) => {
  const user = req.body;
  models.user
    .update(user)
    .then(([result]) => {
      user.id = result.insertId;
      const skillIds = user.skill_Ids;
      console.log("skillIds : ", skillIds);
      console.log("user.id : ", user.id);
      models.userSkill
        .delete({
          user_id: user.id,
        })
        .then(() => {
          Promise.all(
            skillIds.map((skillId) => {
              return models.userSkill.insert({
                userId: user.id,
                skill_id: skillId,
              });
            })
          )
            .then(() => {
              res.location(`/users/${user.id}`).sendStatus(201);
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
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const user = req.body;

  models.user
    .insert(user)
    .then(([result]) => {
      user.id = result.insertId;
      const userId = user.id;
      const skillIds = user.skill_Ids;
      console.log("CONTROLEUR skillIds : ", skillIds);
      Promise.all(
        skillIds.map((skillId) => {
          return models.userSkill.insert({ userId, skillId });
        })
      )
        .then(() => {
          res.location(`/users/${result.insertId}`).sendStatus(201);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
      // eslint-disable-next-line no-restricted-syntax
      console.log("result : ", result);
      // eslint-disable-next-line no-restricted-syntax
      console.log("CONTROLEUR userId : ", userId);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
  // eslint-disable-next-line no-restricted-syntax
  console.log("user : ", user);
};

const destroy = (req, res) => {
  models.user
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
