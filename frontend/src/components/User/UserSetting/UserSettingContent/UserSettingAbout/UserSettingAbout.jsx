import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function UserSettingAbout() {
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
        Résume de ta vie en quelques mots : fais-moi rêver
      </Typography>
      <TextField
        fullWidth
        id="outlined-multiline-static"
        label="A propos de vous"
        multiline
        rows={20}
        sx={{ mt: 2 }}
        defaultValue="Default Value"
      />
    </Paper>
  );
}
