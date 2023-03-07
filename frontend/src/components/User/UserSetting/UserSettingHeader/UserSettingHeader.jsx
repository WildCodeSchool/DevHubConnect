import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function UserSettingHeader() {
  return (
    <Stack spacing={2}>
      <Typography variant="h1">Ma zone de contrôle</Typography>
      <Typography variant="subtitle1" gutterBottom>
        Prends les rênes, configure ton expérience !
      </Typography>
    </Stack>
  );
}
