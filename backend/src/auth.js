const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  // hash the password using argon2 then call next()
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.password;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const verifyPassword = (req, res) => {
  argon2
    .verify(req.user.hashedPassword, req.body.password)
    .then((isVerified) => {
      if (isVerified) {
        const payload = { sub: req.user.id };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRESIN,
        });

        delete req.user.hashedPassword;
        res
          .status(201)
          .send({ token, userId: req.user.id, toggle: process.env.APP_DECO }); //  retour token + user ID
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    req.payload = jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

const verifyId = (req, res, next) => {
  try {
    if (req.payload.sub === parseInt(req.params.id, 10)) {
      next();
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

const validateForm = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;
  const passwordRegex = /^(?=.*?[0-9]).{9,}$/; //  /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{6,}$/ (Fanny)

  if (!email?.length || email == null) {
    errors.push({ field: "email", message: "This field is required" });
  } else if (!emailRegex.test(email)) {
    errors.push({ field: "email", message: "Invalid email" });
  } else if (email.length >= 255) {
    errors.push({
      field: "email",
      message: "Should contain less than 255 characters",
    });
  }

  if (!password?.length || password == null) {
    errors.push({ field: "password", message: "This field is required" });
  } else if (!passwordRegex.test(password)) {
    errors.push({ field: "password", message: "Invalid password" });
  } else if (password.length >= 255) {
    errors.push({
      field: "password",
      message: "Should contain less than 255 characters",
    });
  }

  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
  verifyId,
  validateForm,
};
