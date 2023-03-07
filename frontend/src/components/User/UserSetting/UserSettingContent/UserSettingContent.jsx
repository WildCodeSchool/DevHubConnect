import React, { useEffect, useState } from "react";
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

  const getUser = () => {
    axios
      .get("http://localhost:5007/users/1", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000", // L'URL de votre front-end
        },
      })
      .then((response) => response.data)
      .then((userData) => {
        setUser(userData);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSaveChanges = () => {
    axios
      .put("http://localhost:5007/users/1", user, {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000", // L'URL de votre front-end
        },
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Stack direction="column" spacing={2}>
            <UserSettingField userId={1} />
            <SettingBio userId={1} />
            <UserSettingAbout userId={1} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack direction="column" spacing={2}>
            <UserSettingJob userId={1} />
            <UserSettingSkills userId={1} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={12}>
          <UserSettingSaveButton userId={1} onSave={handleSaveChanges} />
        </Grid>
      </Grid>
    </Box>
  );
}
