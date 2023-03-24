import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import bcrypt from "bcryptjs";
import { Box, Grid, Stack, Snackbar, Alert } from "@mui/material";
import UserSettingBio from "./UserSettingBio/UserSettingBio";
import UserSettingSkills from "./UserSettingSkills/UserSettingSkills";
import UserSettingAbout from "./UserSettingAbout/UserSettingAbout";
import UserSettingField from "./UserSettingField/UserSettingField";
import UserSettingSaveButton from "./UserSettingSaveButton/UserSettingSaveButton";
import UserSettingJob from "./UserSettingJob/UserSettingJob";
import UserSettingUpdatepassword from "./UserSettingUpdatepassword/UserSettingUpdatepassword";
import UserSettingImage from "./UserSettingUploadImg/UserSettingUploadImg";

function UserSettingContent() {
  const userId = parseInt(localStorage.getItem("userId"), 10);
  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    CP: "",
    email: "",
    biography: "",
    password: "",
    job_id: 0,
    id: userId,
    user_image: "",
  });

  const [forceUpdate] = useState(false);

  const [userSkillsProp, setUserSkillsProp] = useState([]);

  const token = localStorage.getItem("token");

  // Récupérer les informations de l'utilisateur
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5007/users/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, [forceUpdate]);

  // Mettre à jour l'utilisateur et ses compétences
  const updateUserAndSkills = async (dataToSend) => {
    try {
      await axios.put(`http://localhost:5007/users/${userId}`, dataToSend, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  };

  // Gérer la sauvegarde des modifications
  const handleSaveChanges = async (event) => {
    event.preventDefault();
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const dataToSend = {
      ...user,
      password: hashedPassword,
      skillIds: userSkillsProp.filter((skillId) => skillId),
    };

    try {
      await updateUserAndSkills(dataToSend);
      console.info("dataToSend", dataToSend);
      setSnackbarOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  // Rafraîchir la page
  const handleRefresh = () => {
    window.location.reload();
  };

  // Gérer la fermeture de la Snackbar et rafraîchir la page
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
    handleRefresh();
  };

  if (!user) {
    return null;
  }

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            <UserSettingField
              user={{ ...user, id: parseInt(user.id, 10) }}
              setUser={setUser}
            />
            <UserSettingBio user={user} setUser={setUser} />
            <UserSettingAbout
              user={{ ...user, id: parseInt(user.id, 10) }}
              setUser={setUser}
            />
            <UserSettingImage user={user} setUser={setUser} />
            <UserSettingUpdatepassword />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <UserSettingJob
              user={{ ...user, job_id: parseInt(user.job_id, 10) }}
              setUser={setUser}
            />
            <UserSettingSkills
              user={user}
              setUser={setUser}
              setUserSkillsProp={setUserSkillsProp}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={12}>
          <UserSettingSaveButton
            onClick={handleSaveChanges}
            user={user}
            setUser={setUser}
          />
        </Grid>
      </Grid>
      {/* Snackbar pour signaler que l'enregistrement s'est bien passé */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Enregistrement effectué avec succès!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default UserSettingContent;

UserSettingContent.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    CP: PropTypes.string,
    email: PropTypes.string,
    biography: PropTypes.string,
    password: PropTypes.string,
    job_id: PropTypes.number,
    id: PropTypes.number,
    user_image: PropTypes.string,
  }),
};

UserSettingContent.defaultProps = {
  user: {
    firstName: "",
    lastName: "",
    CP: "",
    email: "",
    biography: "",
    password: null,
    job_id: 0,
    id: null,
    user_image: "",
  },
};
