import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FormGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
// import SignUpContext from "../../../../../Contexts/SignUpContext";

export default function FormSkills() {
  // const {
  //   formValues,
  //   setFormValues,
  //   activeStep,
  //   setActiveStep,
  //   selectedSkillId,
  //   setSelectedSkillId,
  // } = useContext(SignUpContext);
  // const formValues = { skills };
  const [skillList, setSkillList] = useState([]);

  // requête pour récupérer la liste de skills
  const getSkillList = () => {
    axios
      .get("http://localhost:5007/skills")
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
  // const checkRequiredFields = () => {
  //   const messages = {};
  //   if (skills.length === 0) {
  //     messages.skills = "Veuillez sélectionner au moins une compétence";
  //   }
  //   return messages;
  // };

  // // lors du clic sur suivant: si tous les champs sont remplis ajoute 1 à activeStep et ajoute les valeurs du formulaire à formValue(dans le contexte)
  // const handleNext = (values) => {
  //   const messages = checkRequiredFields(values);
  //   if (Object.keys(messages).length === 0) {
  //     setActiveStep(activeStep + 1);
  //     setFormValues((prevValues) => ({ ...prevValues, ...values }));
  //   }
  // };

  // // lors du clic sur precedant enlève 1 à activeStep et stocke les valeurs du formulaire à formValue(dans le contexte)
  // const handleBack = (values) => {
  //   setActiveStep(activeStep - 1);
  //   setFormValues((prevValues) => ({ ...prevValues, ...values }));
  // };

  return (
    <div>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Selectionnez vos Compétences</FormLabel>
        <FormGroup
          sx={{ display: "flex", flexDirection: "row" }}
          name="skills"
          //   variant="standard"
          //   color="primary"
          //   onChange={(event) => {
          //     // vérifie que selectedSkills contient toujours un tableau, même si values.skills est null ou undefined
          //     const selectedSkills = values.skills || [];
          //     // si la case est cochée, stocke la valeur dans le tableau selectedSKills
          //     // sinon recherche l'index de la valeur dans le tableau, si son index <-1 la valeur est dans le tableau, retire cette valeur.
          //     if (event.target.checked) {
          //       selectedSkills.push(event.target.value);
          //     } else {
          //       const index = selectedSkills.indexOf(event.target.value);
          //       if (index > -1) {
          //         selectedSkills.splice(index, 1);
          //       }
          //     }
          //     setFieldValue("skills", selectedSkills);
          //     setFormValues({ ...formValues, skills: selectedSkills });
          //   }}
          //   // error={Boolean(errors.skills) && Boolean(touched.skills)}
          //   // helperText={Boolean(touched.skills) && errors.skills}
        >
          {skillList.map((skill, index) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox /> // checked={skills.includes(skill.skill_name)}
                }
                value={skill.skill_name}
                label={skill.skill_name}
                index={index}
                key={skill.id}
                // onClick={() => {
                //   if (selectedSkillId.includes(skill.id)) {
                //     setSelectedSkillId((prevState) =>
                //       prevState.filter((id) => id !== skill.id)
                //     );
                //   } else {
                //     setSelectedSkillId((prevState) => [...prevState, skill.id]);
                //   }
                // }}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </div>
  );
}
