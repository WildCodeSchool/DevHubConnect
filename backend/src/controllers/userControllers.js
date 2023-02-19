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

const edit = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  user.id = parseInt(req.params.id, 10);

  models.user
    .update(user)
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
  const user = req.body;
  // TODO validations (length, format...)

  models.user
    .insert(user)
    .then(([result]) => {
      const userId = result.insertId;
      models.userSkill
        .insert({ userId, skillId: req.body.skill_id })
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
      console.log("userId : ", userId);
      // eslint-disable-next-line no-restricted-syntax
      console.log("req.body.skill_id : ", req.body.skill_id);
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