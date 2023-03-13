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
import SignUpContext from "../../../../../Contexts/SignUpContext";

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

  const checkRequiredFields = () => {
    const messages = {};
    if (formValues.agreement === false) {
      messages.agreement =
        "Vous devez accepeter les conditions générales d'utilisation";
    }
    return messages;
  };

  const handleBack = (values) => {
    setActiveStep(activeStep - 1);
    setFormValues((prevValues) => ({ ...prevValues, ...values }));
  };
  const handleNext = (values) => {
    const messages = checkRequiredFields(values);
    if (Object.keys(messages).length === 0) {
      setActiveStep(activeStep + 1);
      setFormValues((prevValues) => ({ ...prevValues, ...values }));
    }
  };

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
      onSubmit={
        (/* event */) => {
          /* event.preventDefault(); */

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

          axios.post("http://localhost:5007/users", newUser).catch((error) => {
            console.error(error);
          });

          handleNext();
        }
      }
    >
      {({ errors, isValid, touched, values, setFieldValue, handleSubmit }) => (
        <Form onSubmit={(event) => handleSubmit(event)}>
          <List disablePadding>
            <ListItem>
              <ListItemText
                primary="Last Name"
                secondary={lastName || "Not Provided"}
              />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText
                primary="First Name"
                secondary={firstName || "Not Provided"}
              />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText primary="CP" secondary={CP || "Not Provided"} />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText
                primary="Email"
                secondary={email || "Not Provided"}
              />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText
                primary="Picture"
                secondary={picture || "Not Provided"}
              />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText primary="Job" secondary={job || "Not Provided"} />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText
                primary="Years of Experience"
                secondary={experience || "Not Provided"}
              />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText
                primary="Region"
                secondary={region || "Not Provided"}
              />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText
                primary="Biography"
                secondary={bio || "Not Provided"}
              />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText
                primary="About"
                secondary={about || "Not Provided"}
              />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText
                primary="GitHub"
                secondary={gitHub || "Not Provided"}
              />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText
                primary="Skills"
                secondary={
                  skills.length > 0
                    ? skills.map((skill) => (
                        <Chip key={skill} label={skill} size="small" />
                      ))
                    : "Not provided"
                }
              />
            </ListItem>
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
              Back
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
              Confirm & Continue
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
