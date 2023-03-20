import React, { useContext } from "react";
import axios from "axios";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Divider,
  Box,
  FormControlLabel,
  Checkbox,
  Chip,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { Formik, Form } from "formik";
import { object } from "yup";
import * as Yup from "yup";
// import transporter from "mvc-express/src/services/mailer";
import SignUpContext from "../../../../../Contexts/SignUpContext";

// const mailer = require('./backend/src/services/mailer.js');

export default function SignUpConfirmation() {
  const {
    formValues,
    setFormValues,
    activeStep,
    setActiveStep,
    selectedSkillId,
    selectedJobId,
    selectedRegionId,
  } = useContext(SignUpContext);
  const {
    lastName,
    firstName,
    CP,
    email,
    password,
    picture,
    job,
    experience,
    region,
    bio,
    about,
    gitHub,
    skills,
    agreement,
  } = formValues;

  // empêche la validtion tant que les CGU ne sont pas acceptées
  const checkRequiredFields = () => {
    const messages = {};
    if (formValues.agreement === false) {
      messages.agreement =
        "Vous devez accepeter les conditions générales d'utilisation";
    }
    return messages;
  };

  // lors du clic sur precedant enlève 1 à activeStep et stocke les valeurs du formulaire à formValue(dans le contexte)
  const handleBack = (values) => {
    setActiveStep(activeStep - 1);
    setFormValues((prevValues) => ({ ...prevValues, ...values }));
  };

  // lors du clic sur suivant: si tous les champs sont remplis ajoute 1 à activeStep et ajoute les valeurs du formulaire à formValue(dans le contexte)

  const handleNext = (values) => {
    const messages = checkRequiredFields(values);
    if (Object.keys(messages).length === 0) {
      setActiveStep(activeStep + 1);
      setFormValues((prevValues) => ({ ...prevValues, ...values }));
    }
  };

  const items = [
    { primary: "Nom", secondary: lastName || "Non Fourni" },
    { primary: "Prénom", secondary: firstName || "Non Fourni" },
    { primary: "Immatriculation", secondary: CP || "Non Fournie" },
    { primary: "Email", secondary: email || "Non Fourni" },
    { primary: "Photo", secondary: picture || "Non Fournie" },
    { primary: "Poste", secondary: job || "Non Fourni" },
    { primary: "Experience", secondary: experience || "Non Fourni" },
    { primary: "Region", secondary: region || "Non Fournie" },
    { primary: "Phrase d'accroche", secondary: bio || "Non Fournie" },
    { primary: "About", secondary: about || "Non Fourni" },
    { primary: "Lien GitHub", secondary: gitHub || "Non Fourni" },
    {
      primary: "Compétences",
      secondary:
        skills.length > 0
          ? skills.map((skill) => (
              <Chip key={skill} label={skill} size="small" />
            ))
          : "Not provided",
    },
  ];
  return (
    <Formik
      initialValues={{
        agreement,
      }}
      validationSchema={object({
        agreement: Yup.boolean().oneOf(
          [true],
          "Vous devez accepeter les conditions générales d'utilisation"
        ),
      })}
      onSubmit={() => {
        // stockage des données du formulaire dans la variable newUser
        const newUser = {
          cp: CP,
          firstname: firstName,
          lastname: lastName,
          email,
          biography: bio,
          about,
          user_image: picture,
          password,
          github_page: gitHub,
          experience,
          user_role_id: 3,
          job_id: selectedJobId,
          region_id: selectedRegionId,
          skillIds: selectedSkillId,
        };

        // requête POST pour créer un utilisateur dans l'API
        axios
          .post("http://localhost:5007/users", newUser)
          .then(() => {
            // Si la requête POST réussit, envoi de l'e-mail de confirmation
            axios
              .post("http://localhost:5007/contact", {
                email,
                subject: "Confirmation d'inscription",
                html: "<p>Merci de vous être inscrit sur notre site !</p>",
              })
              .catch((err) => {
                console.info(err);
              });
          })
          .catch((error) => {
            console.error(error);
          });

        handleNext();
      }}
    >
      {({ errors, isValid, touched, values, setFieldValue, handleSubmit }) => (
        <Form onSubmit={(event) => handleSubmit(event)}>
          <List disablePadding>
            {items.map(({ primary, secondary }, index) => (
              <React.Fragment index={index}>
                <ListItem>
                  <ListItemText primary={primary} secondary={secondary} />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    name="agreement"
                    checked={values.agreement}
                    onChange={(event) => {
                      setFieldValue("agreement", event.target.checked);
                      setFormValues({
                        ...formValues,
                        agreement: event.target.checked,
                      });
                    }}
                    color="primary"
                  />
                }
                label={
                  <>
                    J'accepte les{" "}
                    <a href="/cgu" target="_blank">
                      conditions générales d'utilisation
                    </a>
                  </>
                }
                error={Boolean(errors.agreement) && Boolean(touched.agreement)}
                helperText={Boolean(touched.agreement) && errors.agreement}
              />
              {Boolean(errors.agreement) && (
                <FormHelperText error>{errors.agreement}</FormHelperText>
              )}
            </FormControl>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button
              sx={{ mr: 1 }}
              onClick={() => {
                handleBack(values);
              }}
            >
              Précédent
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="success"
              disabled={!isValid}
              onClick={
                isValid
                  ? () => {
                      handleSubmit();
                    }
                  : () => null
              }
            >
              Confirmer
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
