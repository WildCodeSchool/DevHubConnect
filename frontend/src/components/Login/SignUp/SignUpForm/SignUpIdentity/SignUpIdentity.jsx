import React, { useContext, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import SignUpContext from "../../../../../Contexts/SignUpContext";

export default function SignUpidentity() {
  const { formValues, setFormValues, activeStep, setActiveStep } =
    useContext(SignUpContext);
  const { lastName, firstName, CP, email, password } = formValues;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // empêche la validtion tant que les champs requis ne sont pas remplis
  const checkRequiredFields = (values) => {
    const messages = {};
    if (!values.lastName) {
      messages.lastName = "Veuillez entrer votre nom de famille";
    }
    if (!values.firstName) {
      messages.firstName = "Veuillez entrer votre prénom";
    }
    if (!values.CP) {
      messages.CP = "Veuillez entrer votre matricule";
    }
    if (!values.email) {
      messages.email = "Veuillez entrer votre adresse email";
    }
    if (!values.password) {
      messages.password = "Veuillez entrer le mot de passe";
    }
    return messages;
  };

  // lors du clic sur suivant: si tous les champs sont remplis ajoute 1 à activeStep et ajoute les valeurs du formulaire à formValue(dans le contexte)
  const handleNext = (values) => {
    const messages = checkRequiredFields(values);
    if (Object.keys(messages).length === 0) {
      setActiveStep(activeStep + 1);
      setFormValues((prevValues) => ({ ...prevValues, ...values }));
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          // Utilisation de initialValues avec les valeurs stockées dans le state
          lastName,
          firstName,
          CP,
          email,
          password,
        }}
        // schéma de validation contenant les contraintes pour chaque valeur (utilisation de la bibliotheque yup pour définir les contraintes pour chaque champ)
        validationSchema={yup.object({
          lastName: yup
            .string()
            .required("Veuillez entrer le nom de famille")
            .min(2, "Le nom de famille est trop court")
            .max(60, "Le nom de famille est trop long"),
          firstName: yup
            .string()
            .required("Veuillez entrer le prénom")
            .min(2, "Le prénom est trop court")
            .max(60, "Le prénom est trop long"),
          CP: yup
            .string()
            .required("Veuillez entrer votre matricule")
            .matches(
              /^[0-9]{7}[a-zA-Z]{1}$/,
              "le matricule doit comporter 7 chiffres et une lettre"
            ),
          email: yup
            .string()
            .required("Veuillez entrer votre adresse email")
            .email("Email invalide"),
          password: yup
            .string()
            .required("Veuillez entrer le mot de passe")
            .matches(
              /^(?=.*?[0-9]).{9,}$/,
              "Le mot de passe doit contenir au moins un chiffre et  doit comporter au moins 9 caractères"
            ),
          confirmPassword: yup
            .string()
            .oneOf(
              [yup.ref("password"), null],
              "Les mots de passe doivent correspondre"
            )
            .required("Veuillez confirmer le mot de passe"),
        })}
      >
        {({ errors, isValid, touched, values }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sm={
                  6
                } /* nombre de colonnes sur extra petit écran (12) et sur écrans petits à moyen (6) */
              >
                <Field // fonction field de formik
                  fullWidth
                  name="lastName" // nom du champ correspondant à la propriété de l'objet des valeurs de formulaire dans Formik
                  type="text" // spécifie le type de données que le champ doit accepter
                  as={TextField} // as: prop de Formik pour spécifier le rendu. textField composant de Material UI
                  variant="outlined"
                  color="primary"
                  label="Nom" // label à afficher
                  required // champs obligatoire (MUi)
                  error={Boolean(errors.lastName) && Boolean(touched.lastName)}
                  helperText={Boolean(touched.lastName) && errors.lastName} // texte à afficher
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  fullWidth
                  name="firstName"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Prénom"
                  required
                  error={
                    Boolean(errors.firstName) && Boolean(touched.firstName)
                  }
                  helperText={Boolean(touched.firstName) && errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  fullWidth
                  name="CP"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Matricule"
                  required
                  error={Boolean(errors.CP) && Boolean(touched.CP)}
                  helperText={Boolean(touched.CP) && errors.CP}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  fullWidth
                  name="email"
                  type="email"
                  as={TextField}
                  variant="outlined"
                  label="Email"
                  required
                  error={Boolean(errors.email) && Boolean(touched.email)}
                  helperText={Boolean(touched.email) && errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  fullWidth
                  name="password"
                  type={showPassword ? "text" : "password"}
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Mot de Passe"
                  required
                  error={Boolean(errors.password) && Boolean(touched.password)}
                  helperText={Boolean(touched.password) && errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onMouseDown={() => setShowPassword(true)}
                          onMouseUp={() => setShowPassword(false)}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  fullWidth
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Confirmez le Mot de Passe"
                  required
                  error={
                    Boolean(errors.confirmPassword) &&
                    Boolean(touched.confirmPassword)
                  }
                  helperText={
                    Boolean(touched.confirmPassword) && errors.confirmPassword
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onMouseDown={() => setShowConfirmPassword(true)}
                          onMouseUp={() => setShowConfirmPassword(false)}
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                color="primary"
                disabled={!isValid}
                onClick={
                  isValid
                    ? () => {
                        handleNext(values);
                      }
                    : () => null
                }
                sx={{ mt: 3 }}
              >
                Suivant
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
}
