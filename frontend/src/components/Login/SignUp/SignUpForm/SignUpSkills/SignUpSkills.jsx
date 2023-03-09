import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Box,
  FormGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import { Formik, Form } from "formik";
import { object, array } from "yup";
import SignUpContext from "../../../../../Contexts/SignUpContext";

export default function SignUpSkills() {
  const { formValues, setFormValues, activeStep, setActiveStep } =
    useContext(SignUpContext);
  const { skills } = formValues;
  const [skillList, setSkillList] = useState([]);

  const getSkillList = () => {
    axios
      .get("http://localhost:5007/skills", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
      .then((response) => response.data)
      .then((skillsData) => {
        setSkillList(skillsData);
      });
  };

  useEffect(() => {
    getSkillList();
  }, []);

  const checkRequiredFields = () => {
    const messages = {};
    if (skills.length === 0) {
      messages.skills = "Please select at least 1 skill";
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
          skills,
        }}
        validationSchema={object({
          skills: array().min(1, "You should select at least 1 skill"),
        })}
      >
        {({ errors, isValid, touched, values, setFieldValue }) => (
          <Form>
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
                  setFormValues({ ...formValues, skills: selectedSkills });
                }}
                error={Boolean(errors.skills) && Boolean(touched.skills)}
                helperText={Boolean(touched.skills) && errors.skills}
              >
                {skillList.map((skill, index) => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox checked={skills.includes(skill.skill_name)} />
                      }
                      value={skill.skill_name}
                      label={skill.skill_name}
                      index={index}
                    />
                  );
                })}
              </FormGroup>
            </FormControl>
            <FormHelperText error={Boolean(errors.skills)}>
              {errors.skills}
            </FormHelperText>

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
