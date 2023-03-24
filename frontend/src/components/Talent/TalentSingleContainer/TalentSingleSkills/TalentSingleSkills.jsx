import React, { useEffect, useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

function TalentSingleSkills({ id }) {
  const [skillList, setSkillList] = useState([]);
  const [userSkillList, setUserSkillList] = useState([]);

  const token = localStorage.getItem("token");

  const getSkillList = () => {
    axios
      .get("http://localhost:5007/skills", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((skillsData) => {
        setSkillList(skillsData);
      });
  };

  const getUserSkillList = () => {
    axios
      .get("http://localhost:5007/user_skills", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((userSkillsData) => {
        setUserSkillList(userSkillsData);
      });
  };

  useEffect(() => {
    getSkillList();
    getUserSkillList();
  }, []);

  const skills = userSkillList
    .filter((userSkill) => userSkill.user_id === id)
    .map((List) => {
      const skillItem = skillList.find((skill) => skill.id === List.skill_id);
      return skillItem ? skillItem.skill_name : "";
    });

  return (
    <Paper
      elevation={4}
      sx={{
        color: "UserSetting.color",
        p: 3,
        backgroundColor: "UserSetting.Background",
      }}
    >
      <Typography
        component="div"
        variant="Body2"
        sx={{ pb: 2, textAlign: "center" }}
      >
        COMPETENCES
      </Typography>
      <Stack
        direction="row"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
        sx={{
          p: 2,
        }}
        flexWrap="wrap"
      >
        {skills.map((skill, index) => {
          return <Chip label={skill} index={index} key={skill} size="Medium" />;
        })}
      </Stack>
    </Paper>
  );
}

TalentSingleSkills.propTypes = {
  id: PropTypes.number,
};

TalentSingleSkills.defaultProps = {
  id: null,
};

export default TalentSingleSkills;
