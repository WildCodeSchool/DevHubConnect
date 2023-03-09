import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid, Stack } from "@mui/material";
import SettingBio from "./UserSettingBio/UserSettingBio";
import UserSettingSkills from "./UserSettingSkills/UserSettingSkills";
import UserSettingAbout from "./UserSettingAbout/UserSettingAbout";
import UserSettingField from "./UserSettingField/UserSettingField";
import UserSettingSaveButton from "./UserSettingSaveButton/UserSettingSaveButton";
import UserSettingJob from "./UserSettingJob/UserSettingJob";

export default function UserSettingContent() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    CP: "",
    email: "",
  });

  const [skillListing, setSkillListing] = useState([]);

  const token = localStorage.getItem("token");
  const userId = parseInt(localStorage.getItem("userId"), 10);

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

  const getSkills = async () => {
    try {
      const response = await axios.get("http://localhost:5007/skills", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSkillListing(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
    getSkills();
  }, []);

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5007/users/${userId}`,
        user,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUser(response.data);
      console.info("response.data PUT", response.data);
    } catch (error) {
      console.error(error);
      setUser(null);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Stack direction="column" spacing={2}>
            <UserSettingField userId={userId} />
            <SettingBio userId={userId} user={user} setUser={setUser} />
            <UserSettingAbout userId={userId} user={user} setUser={setUser} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack direction="column" spacing={2}>
            <UserSettingJob userId={userId} user={user} setUser={setUser} />
            <UserSettingSkills
              userId={userId}
              skillListing={skillListing}
              setSkillListing={setSkillListing}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={12}>
          <UserSettingSaveButton onSave={handleSaveChanges} />
        </Grid>
      </Grid>
    </Box>
  );
}
