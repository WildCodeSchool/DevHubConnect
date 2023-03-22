import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {
  FormGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
  Paper,
  Stack,
} from "@mui/material";

export default function FormSkills({ formSkills, setFormSkills }) {
  const [skillList, setSkillList] = useState([]);

  // requête pour récupérer la liste de skills
  const getSkillList = () => {
    axios
      .get("http://localhost:5007/skills")
      .then((response) => response?.data)
      .then((skillsData) => {
        const sortedSkills = skillsData.sort((a, b) => {
          return a.skill_name.localeCompare(b.skill_name);
        });
        setSkillList(sortedSkills);
      });
  };

  // fonction useEffect pour déclencher les requêtes API lors du montage initial du composant
  useEffect(() => {
    getSkillList();
  }, []);

  const handleSkillChange = (event) => {
    if (event.target.checked) {
      formSkills.push(parseInt(event.target.value, 10));
    } else {
      const index = formSkills.indexOf(parseInt(event.target.value, 10));
      if (index > -1) {
        formSkills.splice(index, 1);
      }
    }
    setFormSkills([...new Set(formSkills)]);
  };
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <FormControl component="fieldset" variant="standard">
        <Stack justifyContent="center" alignItems="center" spacing={2}>
          <FormLabel component="legend">Selectionnez vos Compétences</FormLabel>
          <FormGroup
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            name="skills"
          >
            {skillList.map((skill, index) => {
              return (
                <FormControlLabel
                  sx={{ width: 113 }} // <-- C'est la Fanny
                  control={
                    <Checkbox
                      checked={formSkills?.includes(skill.id)}
                      onClick={handleSkillChange}
                      value={skill?.id}
                      name={skill?.skill_name}
                    />
                  }
                  value={skill?.skill_name}
                  label={skill?.skill_name}
                  index={index}
                  key={skill?.id}
                />
              );
            })}
          </FormGroup>
        </Stack>
      </FormControl>
    </Paper>
  );
}

FormSkills.propTypes = {
  formSkills: PropTypes.objectOf(PropTypes.number),
  setFormSkills: PropTypes.func,
};

FormSkills.defaultProps = {
  formSkills: {},
  setFormSkills: "",
};
