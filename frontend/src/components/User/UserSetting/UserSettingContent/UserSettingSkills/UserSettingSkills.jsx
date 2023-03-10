import React, { useState, useEffect } from "react";
import {
  Paper,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import axios from "axios";

export default function UserSettingSkills({ user, setUser }) {
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
        console.error(error);
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
        const userSkillsFilter = response.data.filter(
          (userSkill) => userSkill.user_id === user.id
        );
        setUserSkills(userSkillsFilter);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserSkills();
  }, [user.id]);

  const handleSkillChange = async (event) => {
    const skillName = event.target.name;
    const isChecked = event.target.checked;
    setUser((prevUser) => ({ ...prevUser, userSkillsFilter: skillName }));

    const skillId = skillListing.find(
      (skill) => skill.skill_name === skillName
    ).id;

    if (isChecked) {
      try {
        await axios.post(
          "http://localhost:5007/user_skills",
          {
            user_id: user.id,
            skill_id: skillId,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setUserSkills([...userSkills, { user_id: user.id, skill_id: skillId }]);
      } catch (error) {
        console.error(error);
      }
    } else {
      const userSkillId = userSkills.find(
        (userSkill) => userSkill.skill_id === skillId
      ).id;
      try {
        await axios.delete(`http://localhost:5007/user_skills/${userSkillId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUserSkills(
          userSkills.filter((userSkill) => userSkill.id !== userSkillId)
        );
      } catch (error) {
        console.error(error);
      }
    }
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
                  onChange={handleSkillChange}
                  value={skill.id}
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

UserSettingSkills.propTypes = {
  user: PropTypes.shape({
    skill: PropTypes.string,
    id: PropTypes.number.isRequired,
  }).isRequired,
  setUser: PropTypes.func.isRequired,
};
