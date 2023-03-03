import React, { useRef /* , useEffect,  useState */ } from "react";
// import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Grid,
  MenuItem,
  FormGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
  Select,
  InputLabel,
} from "@mui/material";
import { Field, Formik, Form } from "formik";
import { object, string, number, array } from "yup";
import * as Yup from "yup";
import SignUpInitialValues from "./SignUpInitialValues/SignUpInitialValues";

export default function FormTest() {
  /* const [jobList, setJobList] = useState([]);
  const [regionList, setRegionList] = useState([]);

   const getJobList = () => {
    axios
      .get("http://localhost:5000/jobs", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
      .then((response) => response.data)
      .then((jobsData) => {
        setJobList(jobsData);
      });
    console.log(jobList);
  };

  const getRegionList = () => {
    axios
      .get("http://localhost:5000/regions", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
      .then((response) => response.data)
      .then((regionsData) => {
        setRegionList(regionsData);
      });
    console.log(regionList);
  };

  useEffect(() => {
    getJobList();
    getRegionList();
  }, []); */

  const inputRef = useRef(null);
  const cpRegex = /^[0-9]{7}[a-zA-Z]{1}$/;

  return (
    <Formik
      initialValues={SignUpInitialValues}
      onSubmit={(values, formikHelpers) => {
        formikHelpers.resetForm();
        // console.log("values", values);
      }}
      validationSchema={object({
        lastName: string()
          .required("Please enter last name")
          .min(2, "last name too short")
          .max(60, "last name too long"),
        firstName: string()
          .required("Please enter first name")
          .min(2, "first name too short")
          .max(60, "first name too long"),
        CP: string()
          .required("Please enter CP")
          .matches(cpRegex, "CP should be 7 numbers and 1 letter"),
        email: string().required("Please enter email").email("Invalid email"),
        password: string()
          .required("Please enter password")
          .matches(
            /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{6,}$/,
            "Password should contain at least one digit and one uppercase letter, and be at least 6 characters long"
          ),
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
        gitHub: string()
          .url()
          .max(255, "GitHub link should be at most 255 characters"),
        skills: array().min(1),
        agreement: Yup.boolean().oneOf(
          [true],
          "You must accept the terms and conditions to proceed"
        ),
      })}
    >
      {({
        errors,
        isValid,
        touched,
        dirty,
        values,
        setFieldValue,
        handleChange,
      }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field
                name="lastName"
                type="lastName"
                as={TextField}
                variant="standard"
                color="primary"
                label="Last Name"
                fullWidth
                error={Boolean(errors.lastName) && Boolean(touched.lastName)}
                helperText={Boolean(touched.lastName) && errors.lastName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name="firstName"
                type="firstName"
                as={TextField}
                variant="standard"
                color="primary"
                label="First Name"
                fullWidth
                error={Boolean(errors.firstName) && Boolean(touched.firstName)}
                helperText={Boolean(touched.firstName) && errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name="CP"
                type="CP"
                as={TextField}
                variant="standard"
                color="primary"
                label="CP"
                fullWidth
                error={Boolean(errors.CP) && Boolean(touched.CP)}
                helperText={Boolean(touched.CP) && errors.CP}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name="email"
                type="email"
                as={TextField}
                variant="standard"
                label="Email"
                fullWidth
                error={Boolean(errors.email) && Boolean(touched.email)}
                helperText={Boolean(touched.email) && errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name="password"
                type="password"
                as={TextField}
                variant="standard"
                color="primary"
                label="Password"
                fullWidth
                error={Boolean(errors.password) && Boolean(touched.password)}
                helperText={Boolean(touched.password) && errors.password}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name="picture"
                type="file"
                as={TextField}
                variant="standard"
                color="primary"
                label="Upload my picture"
                fullWidth
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
                  fullWidth
                  onChange={(event) => {
                    setFieldValue("job", event.target.value);
                  }}
                  error={Boolean(errors.job) && Boolean(touched.job)}
                  helperText={Boolean(touched.job) && errors.job}
                >
                  {/* jobList.map((job, index) => {
                    return (
                      <MenuItem value={job} index={index}>
                        {job}
                      </MenuItem>
                    );
                  }) */}
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
                fullWidth
                error={
                  Boolean(errors.experience) && Boolean(touched.experience)
                }
                helperText={Boolean(touched.experience) && errors.experience}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="region">region</InputLabel>
                <Select
                  name="region"
                  label="region"
                  variant="standard"
                  color="primary"
                  fullWidth
                  onChange={(event) => {
                    setFieldValue("region", event.target.value);
                  }}
                  error={Boolean(errors.region) && Boolean(touched.region)}
                  helperText={Boolean(touched.region) && errors.region}
                >
                  {/* regionList.map((region, index) => {
                    return (
                      <MenuItem value={region} index={index}>
                        {region}
                      </MenuItem>
                    );
                  }) */}
                  <MenuItem value="Nord-Pas-de-Calais">
                    Nord-Pas-de-Calais
                  </MenuItem>
                  <MenuItem value="Ile-de-France">Ile-de-France</MenuItem>
                  <MenuItem value="Champagne-Ardenne">
                    Champagne-Ardenne
                  </MenuItem>
                  <MenuItem value="Picardie">Picardie</MenuItem>
                  <MenuItem value="Haute-Normandie">Haute-Normandie</MenuItem>
                  <MenuItem value="Basse-Normandie">Basse-Normandie</MenuItem>
                  <MenuItem value="Bourgogne">Bourgogne</MenuItem>
                  <MenuItem value="Franche-Comté">Franche-Comté</MenuItem>
                  <MenuItem value="Alsace">Alsace</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name="bio"
                type="bio"
                as={TextField}
                variant="standard"
                color="primary"
                label="bio"
                fullWidth
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
                fullWidth
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
                fullWidth
                error={Boolean(errors.gitHub) && Boolean(touched.gitHub)}
                helperText={Boolean(touched.gitHub) && errors.gitHub}
              />
            </Grid>
            <FormControl component="fieldset" variant="standard">
              <FormLabel component="legend">Select your skills</FormLabel>
              <FormGroup
                sx={{ display: "flex", flexDirection: "row" }}
                name="skills"
                variant="standard"
                color="primary"
                onChange={(event) => {
                  const selectedSkills = values.skills || []; // vérifie que selectedSkills contient toujours un tableau, même si values.skills est null ou undefined
                  if (event.target.checked) {
                    selectedSkills.push(event.target.value);
                  } else {
                    const index = selectedSkills.indexOf(event.target.value);
                    if (index > -1) {
                      selectedSkills.splice(index, 1);
                    }
                  }
                  setFieldValue("skills", selectedSkills);
                }}
                error={Boolean(errors.skills) && Boolean(touched.skills)}
                helperText={Boolean(touched.skills) && errors.skills}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  value="HTML/CSS"
                  label="HTML/CSS"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  value="JavaScript"
                  label="JavaScript"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  value="C#"
                  label="C#"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  value="PHP"
                  label="PHP"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  value="SQL"
                  label="SQL"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  value="Ruby on Rails"
                  label="Ruby on Rails"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  value="Java"
                  label="Java"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  value="Python"
                  label="Python"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  value="HTML/CSS"
                  label="HTML/CSS"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  value="JavaScript"
                  label="JavaScript"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  value="C#"
                  label="C#"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  value="PHP"
                  label="PHP"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  value="SQL"
                  label="SQL"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  value="Ruby on Rails"
                  label="Ruby on Rails"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  value="Java"
                  label="Java"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  value="Python"
                  label="Python"
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="agreement"
                  checked={values.agreement}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="Agree to terms and conditions"
              error={Boolean(errors.agreement) && Boolean(touched.agreement)}
              helperText={Boolean(touched.agreement) && errors.agreement}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={!isValid || !dirty}
            >
              Sign up
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
