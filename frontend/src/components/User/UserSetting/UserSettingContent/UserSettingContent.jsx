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
  });
  const [userSkillsProp, setUserSkillsProp] = useState(user.userSkillsFilter);

  const token = localStorage.getItem("token");
  // console.info(user);

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

  useEffect(() => {
    getUser();
  }, []);

  const handleSaveChanges = async () => {
    console.info("User au clik : ", user);
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const dataToSend = { ...user, password: hashedPassword };
    try {
      const response = await axios.put(
        `http://localhost:5007/users/${userId}`,
        dataToSend,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.info("Response : ", response);
    } catch (error) {
      console.error(error);
    }
  };

  console.info("Rendering UserSettingContent...");

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            <UserSettingField user={user} setUser={setUser} />
            <UserSettingBio user={user} setUser={setUser} />
            <UserSettingAbout userId={userId} user={user} setUser={setUser} />
            <UserSettingUpdatepassword />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <UserSettingJob user={user} setUser={setUser} />
            <UserSettingSkills
              user={user}
              setUser={setUser}
              userSkillsProp={userSkillsProp}
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

UserSettingBio.propTypes = {
  userId: PropTypes.number.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    CP: PropTypes.string,
    email: PropTypes.string,
    biography: PropTypes.string,
    job_id: PropTypes.number,
  }).isRequired,
  setUser: PropTypes.func,
};
