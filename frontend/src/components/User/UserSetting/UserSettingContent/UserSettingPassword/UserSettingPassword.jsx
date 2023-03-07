import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

export default function UserSettingPassword() {
  return (
    <Paper
      elevation={4}
      sx={{
        color: "UserDashboardCard.color",
        p: 3,
        backgroundColor: "UserSetting.Background",
      }}
    >
      <Stack direction="column" spacing={3}>
        <Stack direction="row" spacing={3}>
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          <TextField
            id="confirm-password-input"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
        </Stack>
      </Stack>
    </Paper>
  );
}
