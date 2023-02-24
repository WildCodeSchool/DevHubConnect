import * as React from "react";
import { Typography, TextField, Button, Box } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";

const initalValues = {
  lastName: "",
  firstName: "",
  CP: "",
  email: "",
  password: "",
};

export default function SignUpComponant() {
  return (
    <div>
      <Typography variant="h1">User Sign Up</Typography>
      <Formik
        initialValues={initalValues}
        onSubmit={(values, formikHelpers) => {
          formikHelpers.resetForm();
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
          <Form>
            <Field
              name="lastName"
              type="lastName"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Last Name"
              fullWidth
              error={Boolean(errors.lastName) && Boolean(touched.lastName)}
              helperText={Boolean(touched.lastName) && errors.lastName}
            />
            <Box height={14} />
            <Field
              name="firstName"
              type="firstName"
              as={TextField}
              variant="outlined"
              color="primary"
              label="First Name"
              fullWidth
              error={Boolean(errors.firstName) && Boolean(touched.firstName)}
              helperText={Boolean(touched.firstName) && errors.firstName}
            />
            <Box height={14} />
            <Field
              name="CP"
              type="CP"
              as={TextField}
              variant="outlined"
              color="primary"
              label="CP"
              fullWidth
              error={Boolean(errors.CP) && Boolean(touched.CP)}
              helperText={Boolean(touched.CP) && errors.CP}
            />
            <Box height={14} />
            <Field
              name="email"
              type="email"
              as={TextField}
              variant="outlined"
              label="Email"
              fullWidth
              error={Boolean(errors.email) && Boolean(touched.email)}
              helperText={Boolean(touched.email) && errors.email}
            />
            <Box height={14} />
            <Field
              name="password"
              type="password"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Password"
              fullWidth
              error={Boolean(errors.password) && Boolean(touched.password)}
              helperText={Boolean(touched.password) && errors.password}
            />
            <Box height={14} />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={!isValid || !dirty}
            >
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
