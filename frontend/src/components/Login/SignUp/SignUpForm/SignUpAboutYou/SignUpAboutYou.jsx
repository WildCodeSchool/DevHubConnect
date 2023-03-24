import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Grid,
  MenuItem,
  FormControl,
} from "@mui/material";
import { Field, Formik, Form } from "formik";
import { object, string, number } from "yup";
import SignUpContext from "../../../../../Contexts/SignUpContext";

export default function SignUpAboutYou() {
  const {
    formValues,
    setFormValues,
    activeStep,
    setActiveStep,
    setselectedJobId,
    setselectedRegionId,
  } = useContext(SignUpContext);
  const { picture, job, experience, region, bio, about, gitHub } = formValues;

  // hooks d'état initialisés avec des tableaux vide pour stocker les données provenant de l'API
  const [jobList, setJobList] = useState([]);
  const [regionList, setRegionList] = useState([]);

  // requête pour récupérer la liste de jobs
  const getJobList = () => {
    axios
      .get("http://localhost:5007/jobs", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
      .then((response) => response.data)
      .then((jobsData) => {
        // Tri du tableau par ordre alphabétique de la propriété 'job_name'
        jobsData.sort((a, b) => a.job_name.localeCompare(b.job_name));
        setJobList(jobsData);
      });
  };
  // requête pour récupérer la liste des régions
  const getRegionList = () => {
    axios
      .get("http://localhost:5007/regions", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
      .then((response) => response.data)
      .then((regionsData) => {
        // Tri du tableau par ordre alphabétique de la propriété 'region_name'
        regionsData.sort((a, b) => a.region_name.localeCompare(b.region_name));
        setRegionList(regionsData);
      });
  };

  // fonction useEffect pour déclencher les requêtes API lors du montage initial du composant
  useEffect(() => {
    getJobList();
    getRegionList();
  }, []);

  // empêche la validtion tant que les champs requis ne sont pas remplis
  const checkRequiredFields = (values) => {
    const messages = {};
    if (!values.job) {
      messages.job = "Veuillez sélectionner un poste";
    }
    if (!values.experience) {
      messages.experience = "Veuillez entrer une expérience";
    }
    if (!values.region) {
      messages.region = "Veuillez sélectionner une région";
    }
    if (!values.bio) {
      messages.bio = "Veuillez entrer une phrase d'accroche";
    }
    if (!values.about) {
      messages.about = "Please enter your about";
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

  // lors du clic sur precedant enlève 1 à activeStep et stocke les valeurs du formulaire à formValue(dans le contexte)
  const handleBack = (values) => {
    setActiveStep(activeStep - 1);
    setFormValues((prevValues) => ({ ...prevValues, ...values }));
  };

  return (
    <div>
      <Formik
        initialValues={{
          // Utilisation de initialValues avec les valeurs stockées dans le state
          picture,
          job,
          experience,
          region,
          bio,
          about,
          gitHub,
        }}
        // schéma de validation contenant les contraintes pour chaque valeur (utilisation de la bibliotheque yup pour définir les contraintes pour chaque champ)
        validationSchema={object({
          picture: string()
            .url()
            .max(
              255,
              "Le lien de l'image doit comporter au maximum 255 caractères"
            ),
          job: string().required("Veuillez sélectionner un métier"),
          experience: number()
            .required("Veuillez entrer une expérience")
            .min(1, "L'expérience doit être d'au moins 1 an")
            .max(45, "L'expérience doit être d'au plus 45 ans"),
          region: string().required("Veuillez sélectionner une région"),
          bio: string()
            .required("Veuillez entrer une phrase d'accroche")
            .min(1, "Veuillez entrer une phrase d'accroche")
            .max(
              140,
              "La phrase d'accroche doit comporter au maximum 140 caractères"
            ),
          about: string()
            .required("Veuillez entrer votre présentation")
            .min(15, "La présentation doit comporter au moins 15 caractères")
            .max(
              1000,
              "La présentation doit comporter au maximum 1000 caractères"
            ),
          gitHub: string()
            .url()
            .max(
              255,
              "Le lien GitHub doit comporter au maximum 255 caractères"
            ),
        })}
      >
        {({ errors, isValid, touched, setFieldValue, values }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  fullWidth
                  name="picture"
                  type="url"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Lien vers votre photo"
                  error={Boolean(errors.picture) && Boolean(touched.picture)}
                  helperText={Boolean(touched.picture) && errors.picture}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    select
                    required
                    name="job"
                    label="votre poste actuel"
                    value={job}
                    variant="outlined"
                    color="primary"
                    // fonction appelée lors de la sélection d'une option dans la liste
                    // utilise setFieldValue de Formik pour MAJ les valeurs du champ dans le formulaire
                    // utilise setFormValue pour stocker la valeur dans le state (du contexte)
                    onChange={(event) => {
                      setFieldValue("job", event.target.value);
                      setFormValues({ ...formValues, job: event.target.value });
                    }}
                    error={Boolean(errors.job) && Boolean(touched.job)}
                    helperText={Boolean(touched.job) && errors.job}
                  >
                    <MenuItem value=""> </MenuItem>
                    {
                      // affichage de la liste de metier en utilisant le tableau des datas récupérées dans l'API
                      jobList.map((jobs) => {
                        return (
                          <MenuItem
                            // au clic stockage de l'Id dans le state selectedJobId
                            onClick={() => {
                              setselectedJobId(jobs.id);
                            }}
                            value={jobs.job_name}
                            key={jobs.id}
                          >
                            {jobs.job_name}
                          </MenuItem>
                        );
                      })
                    }
                  </TextField>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  fullWidth
                  name="experience"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="nombre d'années d'expérience"
                  required
                  error={
                    Boolean(errors.experience) && Boolean(touched.experience)
                  }
                  helperText={Boolean(touched.experience) && errors.experience}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <TextField
                    select
                    name="region"
                    label="Région"
                    value={region}
                    required
                    variant="outlined"
                    color="primary"
                    // fonction appelée lors de la sélection d'une option dans la liste
                    // utilise setFieldValue de Formik pour MAJ les valeurs du champ dans le formulaire
                    // utilise setFormValue pour stocker la valeur dans le state (du contexte)
                    onChange={(event) => {
                      setFieldValue("region", event.target.value);
                      setFormValues({
                        ...formValues,
                        region: event.target.value,
                      });
                    }}
                    error={Boolean(errors.region) && Boolean(touched.region)}
                    helperText={Boolean(touched.region) && errors.region}
                  >
                    <MenuItem value=""> </MenuItem>
                    {regionList.map((regions) => {
                      return (
                        <MenuItem
                          // au clic stockage de l'Id dans le state selectedRegionId
                          onClick={() => {
                            setselectedRegionId(regions.id);
                          }}
                          value={regions.region_name}
                          key={regions.id}
                        >
                          {regions.region_name}
                        </MenuItem>
                      );
                    })}
                  </TextField>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Field
                  fullWidth
                  multiline
                  rows={2}
                  name="bio"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="votre phrase d'accroche"
                  required
                  error={Boolean(errors.bio) && Boolean(touched.bio)}
                  helperText={Boolean(touched.bio) && errors.bio}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Field
                  fullWidth
                  multiline
                  rows={6}
                  name="about"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="votre expérience en quelques mots"
                  required
                  error={Boolean(errors.about) && Boolean(touched.about)}
                  helperText={Boolean(touched.about) && errors.about}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  fullWidth
                  name="gitHub"
                  type="url"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Votre Lien GitHub"
                  error={Boolean(errors.gitHub) && Boolean(touched.gitHub)}
                  helperText={Boolean(touched.gitHub) && errors.gitHub}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="outlined"
                color="primary"
                sx={{ mt: 3, mr: 2 }}
                onClick={() => {
                  handleBack(values);
                }}
              >
                Précédent
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
                disabled={!isValid}
                onClick={
                  isValid
                    ? () => {
                        handleNext(values);
                      }
                    : () => null
                }
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
