import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import bcrypt from "bcryptjs";
import { Box, Grid, Stack } from "@mui/material";
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
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    CP: "",
    email: "",
    biography: "",
    password: "",
    job_id: "",
    id: "",
    user_image: "",
  });

  const [forceUpdate, setForceUpdate] = useState(false); // nouvel état forceUpdate

  const [userSkillsProp, setUserSkillsProp] = useState([]);

  const token = localStorage.getItem("token");

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

  const updateUserAndSkills = async (dataToSend) => {
    try {
      await axios.put(`http://localhost:5007/users/${userId}`, dataToSend, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  };

  const handleSaveChanges = async () => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const dataToSend = {
      ...user,
      password: hashedPassword,
      skillIds: userSkillsProp.filter((skillId) => skillId),
    };

    try {
      await updateUserAndSkills(dataToSend);
      console.info(dataToSend);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            <UserSettingField user={user} setUser={setUser} />
            <UserSettingBio user={user} setUser={setUser} />
            <UserSettingAbout user={user} setUser={setUser} />
            <UserSettingImage user={user} setUser={setUser} />
            <UserSettingUpdatepassword />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <UserSettingJob user={user} setUser={setUser} />
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
    job_id: PropTypes.number,
    user_image: PropTypes.string,
  }).isRequired,
};
