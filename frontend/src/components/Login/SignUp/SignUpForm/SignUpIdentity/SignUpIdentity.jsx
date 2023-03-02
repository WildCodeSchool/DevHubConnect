import React, { useCallback, useContext } from "react";
import { TextField, Button, Box, Grid } from "@mui/material";
import { Field, Formik } from "formik";
import { object, string } from "yup";
import SignUpContext from "../../../../../Contexts/SignUpContext";

export default function SignUpidentity() {
  const { formValues, setFormValues, handleNext } = useContext(SignUpContext);
  const { lastName, firstName, CP, email, password } = formValues;
  // console.log("identity formvalues", formValues);
  const handleSubmit = useCallback(
    (newValues) => {
      setFormValues((prevValues) => ({ ...prevValues, ...newValues }));
    },
    [setFormValues]
  );
  return (
    <div>
      <Formik
        initialValues={formValues}
        onSubmit={(values) => {
          // console.log("values", values);
          handleSubmit(values);
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
            .min(8, "CP too short")
            .max(8, "CP too long"),
          email: string().required("Please enter email").email("Invalid email"),
          password: string()
            .required("Please enter password")
            .min(7, "Password should be minimum 7 characters"),
        })}
      >
        {({ errors, isValid, touched, dirty }) => (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  name="lastName"
                  type="lastName"
                  as={TextField}
                  variant="standard"
                  color="primary"
                  label="Last Name"
                  value={lastName.value}
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
                  value={firstName.value}
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
                  value={CP.value}
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
                  value={email.value}
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
                  value={password.value}
                  error={Boolean(errors.password) && Boolean(touched.password)}
                  helperText={Boolean(touched.password) && errors.password}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!isValid || !dirty}
                onClick={
                  isValid
                    ? () => {
                        handleNext();
                        handleSubmit();
                      }
                    : () => null
                }
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
