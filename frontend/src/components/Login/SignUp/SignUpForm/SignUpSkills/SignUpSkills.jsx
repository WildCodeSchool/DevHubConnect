import React, { useContext } from "react";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  Button,
} from "@mui/material";
import { Formik } from "formik";
import { object, array } from "yup";
import SignUpContext from "../../../../../Contexts/SignUpContext";

export default function SignUpSkills() {
  const { formValues, handleNext, handleBack } = useContext(SignUpContext);
  const { skill } = formValues;

  return (
    <div>
      <Formik
        initialValues={formValues}
        validationSchema={object({
          skills: array().min(1),
        })}
      >
        {({ errors, isValid, touched, dirty }) => (
          <>
            <FormGroup
              name="skill"
              variant="standard"
              color="primary"
              value={skill.value}
              error={Boolean(errors.skill) && Boolean(touched.skill)}
              helperText={Boolean(touched.skill) && errors.skill}
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
              <FormControlLabel control={<Checkbox />} value="C#" label="C#" />
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
              <FormControlLabel control={<Checkbox />} value="C#" label="C#" />
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
