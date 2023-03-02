import React, { useContext, useRef } from "react";
import {
  TextField,
  Button,
  Box,
  Grid,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import { Field, Formik } from "formik";
import { object, string, number } from "yup";
import SignUpContext from "../../../../../Contexts/SignUpContext";

export default function SignUpAboutYou() {
  const { formValues, handleNext, handleBack } = useContext(SignUpContext);
  const { picture, job, experience, region, bio, about, gitHub } = formValues;
  const inputRef = useRef(null);
  // console.log("about you formvalues", formValues);
  return (
    <div>
      <Formik
        initialValues={formValues}
        validationSchema={object({
          job: string().required("Please select a job"),
          experience: number()
            .required("Please enter experience")
            .min(1, "Experience should be at least 1 year")
            .max(45, "Experience should be at most 45 years"),
          region: string().required("Please select a region"),
          bio: string()
            .required("Please enter your bio")
            .min(1, "Bio should not be empty")
            .max(140, "Bio should be at most 140 characters"),
          about: string()
            .required("Please enter your about")
            .min(15, "About should be at least 15 characters")
            .max(1000, "About should be at most 1000 characters"),
          gitHub: string().max(
            255,
            "GitHub link should be at most 255 characters"
          ),
        })}
      >
        {({ errors, isValid, touched, dirty, setFieldValue }) => (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  name="picture"
                  type="file"
                  as={TextField}
                  variant="standard"
                  color="primary"
                  label="Upload my picture"
                  value={picture.value}
                  inputRef={inputRef}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="job">Job</InputLabel>
                  <Select
                    name="job"
                    label="job"
                    variant="standard"
                    color="primary"
                    fullWidthvalue={job.value}
                    onChange={(event) => {
                      setFieldValue("job", event.target.value);
                    }}
                    error={Boolean(errors.job) && Boolean(touched.job)}
                    helperText={Boolean(touched.job) && errors.job}
                  >
                    <MenuItem value="developpeur">Développeur</MenuItem>
                    <MenuItem value="integrateur">Intégrateur</MenuItem>
                    <MenuItem value="chef de projet">Chef de Projet</MenuItem>
                    <MenuItem value="analyste">Analyste</MenuItem>
                    <MenuItem value="expert SEO">Expert SEO</MenuItem>
                    <MenuItem value="scrum master">Scrum Master</MenuItem>
                    <MenuItem value="testeur">Testeur</MenuItem>
                    <MenuItem value="product owner">Product Owner</MenuItem>
                    <MenuItem value="coach agile">Coach Agile</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="experience"
                  as={TextField}
                  variant="standard"
                  color="primary"
                  label="Années d'expérience"
                  value={experience.value}
                  error={
                    Boolean(errors.experience) && Boolean(touched.experience)
                  }
                  helperText={Boolean(touched.experience) && errors.experience}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="region"
                  as={TextField}
                  select
                  variant="standard"
                  color="primary"
                  label="Region"
                  value={region.value}
                  error={Boolean(errors.region) && Boolean(touched.region)}
                  helperText={Boolean(touched.region) && errors.region}
                >
                  <option value="Ile-de-France">Ile-de-France</option>
                  <option value="Nord-Pas-de-Calais">Nord-Pas-de-Calais</option>
                  <option value="Champagne-Ardenne">Champagne-Ardenne</option>
                  <option value="Picardie">Picardie</option>
                  <option value="Haute-Normandie">Haute-Normandie</option>
                  <option value="Basse-Normandie">Basse-Normandie</option>
                  <option value="Bourgogne">Bourgogne</option>
                  <option value="Franche-Comté">Franche-Comté</option>
                  <option value="Alsace">Alsace</option>
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="bio"
                  type="bio"
                  as={TextField}
                  variant="standard"
                  color="primary"
                  label="bio"
                  value={bio.value}
                  error={Boolean(errors.bio) && Boolean(touched.bio)}
                  helperText={Boolean(touched.bio) && errors.bio}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="about"
                  type="about"
                  as={TextField}
                  variant="standard"
                  color="primary"
                  label="about"
                  value={about.value}
                  error={Boolean(errors.about) && Boolean(touched.about)}
                  helperText={Boolean(touched.about) && errors.about}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="gitHub"
                  type="gitHub"
                  as={TextField}
                  variant="standard"
                  color="primary"
                  label="gitHub"
                  value={gitHub.value}
                  error={Boolean(errors.gitHub) && Boolean(touched.gitHub)}
                  helperText={Boolean(touched.gitHub) && errors.gitHub}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!isValid || !dirty}
                onClick={isValid ? handleNext : () => null}
              >
                Next
              </Button>
            </Box>
          </>
        )}
      </Formik>
    </div>
  );
}
