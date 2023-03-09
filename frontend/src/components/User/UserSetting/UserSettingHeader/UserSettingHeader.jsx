import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function UserSettingHeader() {
  return (
    <Paper elevation={8} sx={{ mb: 2 }}>
      <Box sx={{ width: "100%", background: "#FFF", padding: 3 }}>
        <Stack spacing={2}>
          <Typography variant="h1">Ma zone de contrôle</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Prends les rênes, configure ton expérience !
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
}
