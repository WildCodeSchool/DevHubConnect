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
  const { formValues, setFormValues, activeStep, setActiveStep } =
    useContext(SignUpContext);
  const { picture, job, experience, region, bio, about, gitHub } = formValues;

  const [jobList, setJobList] = useState([]);
  const [regionList, setRegionList] = useState([]);

  const getJobList = () => {
    axios
      .get("http://localhost:5007/jobs", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
      .then((response) => response.data)
      .then((jobsData) => {
        setJobList(jobsData);
      });
  };

  const getRegionList = () => {
    axios
      .get("http://127.0.0.1:5007/regions", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
      .then((response) => response.data)
      .then((regionsData) => {
        setRegionList(regionsData);
      });
  };

  useEffect(() => {
    getJobList();
    getRegionList();
  }, []);

  const checkRequiredFields = (values) => {
    const messages = {};
    if (!values.job) {
      messages.job = "Please select a job";
    }
    if (!values.experience) {
      messages.experience = "Please enter experience";
    }
    if (!values.region) {
      messages.region = "Please select a region";
    }
    if (!values.bio) {
      messages.bio = "Please enter your biography";
    }
    if (!values.about) {
      messages.about = "Please enter your about";
    }
    return messages;
  };

  const handleNext = (values) => {
    const messages = checkRequiredFields(values);
    if (Object.keys(messages).length === 0) {
      setActiveStep(activeStep + 1);
      setFormValues((prevValues) => ({ ...prevValues, ...values }));
    }
  };

  const handleBack = (values) => {
    setActiveStep(activeStep - 1);
    setFormValues((prevValues) => ({ ...prevValues, ...values }));
  };

  return (
    <div>
      <Formik
        initialValues={{
          picture,
          job,
          experience,
          region,
          bio,
          about,
          gitHub,
        }}
        validationSchema={object({
          picture: string()
            .url()
            .max(255, "Picture link should be at most 255 characters"),
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
        })}
      >
        {({ errors, isValid, touched, setFieldValue, values }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  name="picture"
                  as={TextField}
                  variant="standard"
                  color="primary"
                  label="Link to my picture"
                  error={Boolean(errors.picture) && Boolean(touched.picture)}
                  helperText={Boolean(touched.picture) && errors.picture}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <TextField
                    select
                    name="job"
                    label="Job"
                    value={job}
                    variant="standard"
                    color="primary"
                    onChange={(event) => {
                      setFieldValue("job", event.target.value);
                      setFormValues({ ...formValues, job: event.target.value });
                    }}
                    error={Boolean(errors.job) && Boolean(touched.job)}
                    helperText={Boolean(touched.job) && errors.job}
                  >
                    <MenuItem value=""> </MenuItem>
                    {jobList.map((jobs, index) => {
                      return (
                        <MenuItem value={jobs.job_name} index={index}>
                          {jobs.job_name}
                        </MenuItem>
                      );
                    })}
                  </TextField>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="experience"
                  as={TextField}
                  variant="standard"
                  color="primary"
                  label="Years of Experience"
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
                    variant="standard"
                    color="primary"
                    label="Region"
                    value={region}
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
                    {regionList.map((regions, index) => {
                      return (
                        <MenuItem value={regions.region_name} index={index}>
                          {regions.region_name}
                        </MenuItem>
                      );
                    })}
                  </TextField>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="bio"
                  type="bio"
                  as={TextField}
                  variant="standard"
                  color="primary"
                  label="biography"
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
                  error={Boolean(errors.gitHub) && Boolean(touched.gitHub)}
                  helperText={Boolean(touched.gitHub) && errors.gitHub}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                onClick={() => {
                  handleBack(values);
                }}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Button
                type="submit"
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
              >
                Next
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
}
