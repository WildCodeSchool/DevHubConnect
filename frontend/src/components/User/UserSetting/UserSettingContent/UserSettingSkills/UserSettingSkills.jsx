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
  const [userSkills, setUserSkills] = useState([]);
  const token = localStorage.getItem("token");
  const userId = parseInt(localStorage.getItem("userId"), 10);

  const fetchSkills = async () => {
    try {
      const response = await axios.get("http://localhost:5007/skills", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const sortedSkills = response.data.sort((a, b) => {
        return a.skill_name.localeCompare(b.skill_name);
      });
      setSkillListing(sortedSkills);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  useEffect(() => {
    const fetchUserSkills = async () => {
      try {
        const response = await axios.get("http://localhost:5007/user_skills", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const userSkillsFilter = response.data.filter(
          (userSkill) => userSkill.user_id === userId
        );
        setUserSkills(userSkillsFilter);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserSkills();
  }, [token, userId]);

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
    const updatedUserSkills = userSkills.map((skill) => {
      if (skill.skill_name === skillName) {
        return {
          ...skill,
          checked: isChecked,
        };
      }
      return skill;
    });
    setUserSkills(updatedUserSkills);
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
                  checked={userSkills.some(
                    (userSkill) => userSkill.skill_id === skill.id
                  )}
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
