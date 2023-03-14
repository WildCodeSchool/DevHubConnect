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

export default function UserSettingSkills({
  user,
  setUser,
  setUserSkillsProp,
}) {
  const [skillListing, setSkillListing] = useState([]);
  const [tempUserSkills, setTempUserSkills] = useState([]);

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
    console.info(user);
    const fetchUserSkills = async () => {
      try {
        const response = await axios.get("http://localhost:5007/user_skills", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const userSkillsFilter = response.data.filter(
          (userSkill) => userSkill.user_id === user.id
        );
        setUserSkills(userSkillsFilter);
        setTempUserSkills(userSkillsFilter);
      } catch (error) {
        console.error("Failed to fetch user skills: ", error);
        // display an error message to the user
      }
    };
    fetchUserSkills();
  }, [user]);

  const handleSkillChange = async (event) => {
    const skillName = event.target.name;
    const isChecked = event.target.checked;

    const skillObj = skillListing.find(
      (skill) => skill.skill_name === skillName
    );
    const skillId = skillObj.id;

    let newUserSkills;
    if (isChecked) {
      newUserSkills = [
        ...tempUserSkills,
        { user_id: user.id, skill_id: skillId },
      ];
    } else {
      newUserSkills = tempUserSkills.filter((us) => us.skill_id !== skillId);
    }
    setTempUserSkills(newUserSkills);
    setUserSkillsProp([
      ...new Set(newUserSkills.map((skill) => skill.skill_id)),
    ]);
    setUser((prevUser) => ({
      ...prevUser,
      skillIds: [...new Set(newUserSkills.map((skill) => skill.skill_id))],
    }));
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
                    checked={tempUserSkills.some(
                      (us) => us.skill_id === skill.id
                    )}
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
  setUser: PropTypes.func.isRequired, // Ajoutez cette ligne
  setUserSkillsProp: PropTypes.func.isRequired,
};
