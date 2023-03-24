const validateLoginForm = (req, res, next) => {
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
// -------------------------------------------------------------------------
/* eslint-disable camelcase */
const validateProjectForm = (req, res, next) => {
  // désactivation provisoire le camelcase de eslint pour traiter les tables mysql dans le middleware

  const {
    project_name,
    project_start_date,
    project_end_date,
    project_about,
    project_description,
    // project_state,
    // project_remote,
    // project_image,
    region_id,
    // creator_id,
    skillIds,
  } = req.body;
  const errors = [];
  if (!project_name?.length || project_name == null) {
    errors.push({
      field: "project_name",
      message: "Ce titre est obligatoire",
    });
  } else if (project_name.length >= 61) {
    errors.push({
      field: "project_name",
      message: "Ce champ doit contenir moins de 61 caractères",
    });
  }
  // project_start_date----------------------
  if (!project_start_date?.length || project_start_date == null) {
    errors.push({
      field: "project_start_date",
      message: "Cette date est obligatoire",
    });
  }
  // project_end_date----------------------
  if (!project_end_date?.length || project_end_date == null) {
    errors.push({
      field: "project_end_date",
      message: "Cette date est obligatoire",
    });
  }
  // project_about----------------------
  if (!project_about?.length || project_about == null) {
    errors.push({
      field: "project_about",
      message: "Ces quelques mots sont obligatoires",
    });
  } else if (project_about.length >= 151) {
    errors.push({
      field: "project_about",
      message: "Ce champ doit contenir moins de 151 caractères",
    });
  }
  // project_description----------------------
  if (!project_description?.length || project_description == null) {
    errors.push({
      field: "project_description",
      message: "Cette description est obligatoire",
    });
  } else if (project_description.length >= 2001) {
    errors.push({
      field: "project_description",
      message: "Ce champ doit contenir moins de 2001 caractères",
    });
  }
  // project_state-----------------------

  // project_remote-----------------------

  // project_image-----------------------

  // region_id----------------------
  if (Number.isNaN(region_id) || region_id == null || !region_id?.length) {
    errors.push({
      field: "region_id",
      message: "Le choix d'une région est obligatoire",
    });
  }
  // creator_id-----------------------

  // skillIds-----------------------
  if (!skillIds.length > 0) {
    errors.push({
      field: "skillIds",
      message: "Le choix d'une compétence est obligatoire",
    });
  }
  console.error(errors);
  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};
module.exports = {
  validateLoginForm,
  validateProjectForm,
};
