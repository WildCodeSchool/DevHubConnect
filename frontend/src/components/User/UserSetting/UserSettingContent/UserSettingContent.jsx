import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Stack from "@mui/material/Stack";
import SettingBio from "./UserSettingBio/UserSettingBio";
import UserSettingSkills from "./UserSettingSkills/UserSettingSkills";
import UserSettingAbout from "./UserSettingAbout/UserSettingAbout";
import UserSettingField from "./UserSettingField/UserSettingField";
import UserSettingSaveButton from "./UserSettingSaveButton/UserSettingSaveButton";
import UserSettingJob from "./UserSettingJob/UserSettingJob";

export default function UserSettingContent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Stack direction="column" spacing={2}>
            <UserSettingField />
            <SettingBio />
            <UserSettingAbout />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack direction="column" spacing={2}>
            <UserSettingJob />
            <UserSettingSkills />
          </Stack>
        </Grid>
        <Grid item xs={12} md={12}>
          <UserSettingSaveButton />
        </Grid>
      </Grid>
    </Box>
  );
}
