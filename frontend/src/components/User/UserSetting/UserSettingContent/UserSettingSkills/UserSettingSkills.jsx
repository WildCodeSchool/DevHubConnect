import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {
  Paper,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

export default function UserSettingSkills({ user, setUserSkillsProp }) {
  const [skillListing, setSkillListing] = useState([]);
  const [userSkills, setUserSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("http://localhost:5007/skills", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const sortedSkills = response.data.sort((a, b) => {
          return a.skill_name.localeCompare(b.skill_name);
        });
        setSkillListing(sortedSkills);
      } catch (error) {
        console.error("Failed to fetch skills: ", error);
        // display an error message to the user
      }
    };
    fetchSkills();
  }, [user.id]);

  useEffect(() => {
    const fetchUserSkills = async () => {
      try {
        const response = await axios.get("http://localhost:5007/user_skills", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const userSkillsFilter = response.data
          .filter((userSkill) => userSkill.user_id === user.id)
          .map((userSkill) => userSkill.skill_id);
        setUserSkills([...new Set(userSkillsFilter)]);
      } catch (error) {
        console.error("Failed to fetch user skills: ", error);
        // display an error message to the user
      }
    };
    fetchUserSkills();
  }, [user]);

  const handleSkillChange = (event) => {
    if (event.target.checked) {
      userSkills.push(parseInt(event.target.value, 10));
    } else {
      const index = userSkills.indexOf(event.target.value);
      if (index > -1) {
        userSkills.splice(index, 1);
      }
    }
    setUserSkillsProp([...new Set(userSkills)]);
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
          {skillListing.map((skill) => {
            return (
              <FormControlLabel
                key={skill.id}
                control={
                  <Checkbox
                    checked={userSkills.includes(skill.id)}
                    onChange={handleSkillChange}
                    value={skill.id}
                    name={skill.skill_name}
                  />
                }
                label={skill.skill_name}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </Paper>
  );
}

UserSettingSkills.propTypes = {
  user: PropTypes.shape({
    skill: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  setUserSkillsProp: PropTypes.func.isRequired,
};
