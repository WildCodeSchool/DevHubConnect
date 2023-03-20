import React, { useState, useEffect } from "react";
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

export default function FormSkills() {
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
                  sx={{ width: 113 }}
                  control={<Checkbox />}
                  value={skill.skill_name}
                  label={skill.skill_name}
                  index={index}
                  key={skill.id}
                />
              );
            })}
          </FormGroup>
        </Stack>
      </FormControl>
    </Paper>
  );
}
