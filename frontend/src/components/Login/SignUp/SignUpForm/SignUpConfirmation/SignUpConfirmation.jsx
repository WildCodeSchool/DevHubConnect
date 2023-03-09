import React, { useContext } from "react";
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
  const { formValues, setFormValues, activeStep, setActiveStep } =
    useContext(SignUpContext);
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
        "You must accept the terms and conditions to proceed";
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
          "You must accept the terms and conditions to proceed"
        ),
      })}
      onSubmit={(values) => {
        console.info("submit values", values);
      }}
    >
      {({ errors, isValid, touched, values, setFieldValue }) => (
        <Form>
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
                primary="Password"
                secondary={password || "Not Provided"}
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
                    I Agree to <a href="/cgu">terms and conditions</a>
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
                      handleNext(values);
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
