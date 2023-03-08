import React, { useState, useEffect } from "react";
import {
  Paper,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import axios from "axios";

export default function UserSettingSkills() {
  const [skillListing, setSkillListing] = useState([]);

  const fetchSkill = async () => {
    try {
      const response = await axios.get("http://localhost:5007/skills", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      });
      setSkillListing(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSkill();
  }, []);

  const handleChange = (event) => {
    const skillName = event.target.name;
    const isChecked = event.target.checked;
    const updatedSkillListing = skillListing.map((skill) => {
      if (skill.skill_name === skillName) {
        return {
          ...skill,
          checked: isChecked,
        };
      }
      return skill;
    });
    setSkillListing(updatedSkillListing);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        color: "UserSetting.color",
        p: 3,
        backgroundColor: "UserSetting.Background",
      }}
    >
      <Typography variant="fieldBoxTitle" gutterBottom>
        La checklist ultime de tes compétences
      </Typography>
      <FormControl
        sx={{
          m: 0,
          mt: 2,
          width: 1,
        }}
        component="fieldset"
        variant="standard"
      >
        <FormGroup>
          {skillListing.map((skill) => (
            <FormControlLabel
              key={skill.id}
              control={
                <Checkbox
                  checked={skill.checked || false}
                  onChange={handleChange}
                  name={skill.skill_name}
                />
              }
              label={skill.skill_name}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Paper>
  );
}
