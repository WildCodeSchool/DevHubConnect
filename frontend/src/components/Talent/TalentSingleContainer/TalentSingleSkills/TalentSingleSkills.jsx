import React, { useEffect, useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

function TalentSingleSkills({ id }) {
  // définit un state pour la liste des compétences existantes
  const [skillList, setSkillList] = useState([]);
  // définit un state pour la liste des compétences  du talent visé
  const [userSkillList, setUserSkillList] = useState([]);

  // récupère le token d'authentification stocké dans le localStorage
  const token = localStorage.getItem("token");

  // Fonction pour récupérer la liste des compétences existantes
  const getSkillList = () => {
    axios
      .get("http://localhost:5007/skills", {
        // appel à l'API par requête http GET pour récupérer les compétences existantes
        headers: { Authorization: `Bearer ${token}` }, // envoi du token dans les headers de la requête
      })
      .then((response) => response.data)
      .then((skillsData) => {
        setSkillList(skillsData);
        // met à jour le state avec la liste des compétences existantes
      });
  };

  // Fonction pour récupérer la liste des compétences  du talent visé
  const getUserSkillList = () => {
    axios
      .get("http://localhost:5007/user_skills", {
        // appel à l'API pour récupérer les compétences  du talent visé
        headers: { Authorization: `Bearer ${token}` }, // envoi du token dans les headers de la requête
      })
      .then((response) => response.data)
      .then((userSkillsData) => {
        setUserSkillList(userSkillsData);
        // met à jour le state avec la liste des compétences du talent visé
      });
  };

  // lorsque le composant est monté
  // hook useEffect pour appeler les fonctions de récupération des compétences existantes et des compétences  du talent visé
  useEffect(() => {
    getSkillList();
    getUserSkillList();
  }, []);

  const skills = userSkillList
    .filter((userSkill) => userSkill.user_id === id) // filtrage de la liste des compétences du talent visé en fonction de son id
    .map((List) => {
      // mappe sur la liste des compétences du talent visé pour retourner leur nom
      const skillItem = skillList.find((skill) => skill.id === List.skill_id); // trouve la compétence correspondante dans la liste des compétences existantes
      return skillItem ? skillItem.skill_name : ""; // retourne le nom de la compétence si elle est trouvée dans la liste des compétences existantes
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
          return <Chip label={skill} index={index} size="Medium" />;
        })}
      </Stack>
    </Paper>
  );
}

TalentSingleSkills.propTypes = {
  id: PropTypes.number,
};

TalentSingleSkills.defaultProps = {
  id: "",
};

export default TalentSingleSkills;
