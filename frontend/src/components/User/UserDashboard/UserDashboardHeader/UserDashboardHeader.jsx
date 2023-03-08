import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function UserDashboardHeader() {
  return (
    <Paper elevation={8}>
      <Box sx={{ width: "100%", background: "#FFF", padding: 3 }}>
        <Stack spacing={2} sx={{ mb: 1 }}>
          <Typography variant="h1">Tableau de bord</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Gérez vos projets en un seul endroit : votre dashboard personnel
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
}
