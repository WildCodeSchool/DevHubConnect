import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function UserSettingBio() {
  return (
    <Paper
      elevation={2}
      sx={{
        color: "UserDashboardCard.color",
        p: 3,
        backgroundColor: "UserSetting.Background",
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        Ta vie en 140 caractères : sois bref et impactant
      </Typography>
      <TextField
        fullWidth
        id="outlined-multiline-static"
        label="Bio 140 carateres"
        multiline
        sx={{ mt: 2 }}
        rows={4}
        defaultValue="Default Value"
      />
    </Paper>
  );
}
