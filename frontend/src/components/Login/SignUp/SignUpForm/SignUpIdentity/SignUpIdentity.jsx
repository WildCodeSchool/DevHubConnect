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

  const checkRequiredFields = (values) => {
    const messages = {};
    if (!values.lastName) {
      messages.lastName = "Please enter last name";
    }
    if (!values.firstName) {
      messages.firstName = "Please enter first name";
    }
    if (!values.CP) {
      messages.CP = "Please enter CP";
    }
    if (!values.email) {
      messages.email = "Please enter email";
    }
    if (!values.password) {
      messages.password = "Please enter password";
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
        // schéma de validation contenant les contraintes pour chaque valeur
        validationSchema={yup.object({
          lastName: yup
            .string()
            .required("Please enter last name")
            .min(2, "last name too short")
            .max(60, "last name too long"),
          firstName: yup
            .string()
            .required("Please enter first name")
            .min(2, "first name too short")
            .max(60, "first name too long"),
          CP: yup
            .string()
            .required("Please enter CP")
            .matches(
              /^[0-9]{7}[a-zA-Z]{1}$/,
              "CP should be 7 numbers and 1 letter"
            ),
          email: yup
            .string()
            .required("Please enter email")
            .email("Invalid email"),
          password: yup
            .string()
            .required("Please enter password")
            .matches(
              /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{6,}$/,
              "Password should contain at least one digit and one uppercase letter, and be at least 6 characters long"
            ),
          confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match")
            .required("Please confirm password"),
        })}
      >
        {({ errors, isValid, touched, values }) => (
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
                  error={
                    Boolean(errors.firstName) && Boolean(touched.firstName)
                  }
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
                  error={Boolean(errors.email) && Boolean(touched.email)}
                  helperText={Boolean(touched.email) && errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  as={TextField}
                  variant="standard"
                  color="primary"
                  label="Password"
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
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  as={TextField}
                  variant="standard"
                  color="primary"
                  label="Confirm Password"
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
