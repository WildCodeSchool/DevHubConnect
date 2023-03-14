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
  const {
    formValues,
    setFormValues,
    activeStep,
    setActiveStep,
    selectedSkillId,
    setSelectedSkillId,
  } = useContext(SignUpContext);
  const { skills } = formValues;
  const [skillList, setSkillList] = useState([]);

  // requête pour récupérer la liste de skills
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

  // fonction useEffect pour déclencher les requêtes API lors du montage initial du composant
  useEffect(() => {
    getSkillList();
  }, []);

  // empêche la validtion tant qu'aucun skill n'est sélectionné
  const checkRequiredFields = () => {
    const messages = {};
    if (skills.length === 0) {
      messages.skills = "Veuillez sélectionner au moins une compétence";
    }
    return messages;
  };

  // lors du clic sur suivant: si tous les champs sont remplis ajoute 1 à activeStep et ajoute les valeurs du formulaire à formValue(dans le contexte)
  const handleNext = (values) => {
    const messages = checkRequiredFields(values);
    if (Object.keys(messages).length === 0) {
      setActiveStep(activeStep + 1);
      setFormValues((prevValues) => ({ ...prevValues, ...values }));
    }
  };

  // lors du clic sur precedant enlève 1 à activeStep et stocke les valeurs du formulaire à formValue(dans le contexte)
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
          skills: array().min(
            1,
            "Veuillez sélectionner au moins une compétence"
          ),
        })}
      >
        {({ errors, isValid, touched, values, setFieldValue }) => (
          <Form>
            <FormControl component="fieldset" variant="standard">
              <FormLabel component="legend">
                Selectionnez vos Compétences
              </FormLabel>
              <FormGroup
                sx={{ display: "flex", flexDirection: "row" }}
                name="skills"
                variant="standard"
                color="primary"
                onChange={(event) => {
                  // vérifie que selectedSkills contient toujours un tableau, même si values.skills est null ou undefined
                  const selectedSkills = values.skills || [];
                  // si la case est cochée, stocke la valeur dans le tableau selectedSKills
                  // sinon recherche l'index de la valeur dans le tableau, si son index <-1 la valeur est dans le tableau, retire cette valeur.
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
                      key={skill.id}
                      onClick={() => {
                        if (selectedSkillId.includes(skill.id)) {
                          setSelectedSkillId((prevState) =>
                            prevState.filter((id) => id !== skill.id)
                          );
                        } else {
                          setSelectedSkillId((prevState) => [
                            ...prevState,
                            skill.id,
                          ]);
                        }
                      }}
                    />
                  );
                })}
              </FormGroup>
            </FormControl>
            <FormHelperText error={errors.skills}>
              {errors.skills}
            </FormHelperText>

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                onClick={() => {
                  handleBack(values);
                }}
                sx={{ mr: 1 }}
              >
                Précédent
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
                Suivant
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
}
