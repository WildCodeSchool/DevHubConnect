import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function UserSettingField() {
  return (
    <Paper
      elevation={2}
      sx={{
        color: "UserSetting.color",
        p: 3,
        backgroundColor: "UserSetting.Background",
      }}
    >
      <Stack direction="column" spacing={3}>
        <Typography variant="fieldBoxTitle" gutterBottom>
          Qui es-tu ? Les champs obligatoires ne mentent pas
        </Typography>
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ xs: 3, sm: 3, md: 2 }}
          sx={{ m: { sm: 3, md: 2 } }}
        >
          <TextField
            required
            id="firstName"
            label="Nom"
            defaultValue="firstName"
            sx={{ width: { sm: "100%", md: "33%" } }}
          />
          <TextField
            required
            id="lastName"
            label="Prénom"
            defaultValue="lastName"
            sx={{ width: { sm: "100%", md: "33%" } }}
          />
          <TextField
            required
            id="CP"
            label="CP"
            defaultValue="1234567A"
            sx={{ width: { sm: "100%", md: "33%" } }}
          />
        </Stack>
        <Stack direction="row" spacing={3}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            defaultValue="steve@apple.com"
          />
        </Stack>
      </Stack>
    </Paper>
  );
}
