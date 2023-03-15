import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function ProjectFormHeading() {
  return (
    <Paper elevation={8} sx={{ mb: 2 }}>
      <Stack direction="row" spacing={2}>
        <Box sx={{ width: "70%", background: "#FFF", padding: 3 }}>
          <Stack spacing={2}>
            <Typography variant="h1">Add Project</Typography>
            <Typography variant="h5">Neuralink</Typography>
            <Typography variant="subtitle1" gutterBottom>
              Projet de développement de la connectivité cerveau-machine.
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ width: "30%", background: "#FFF", padding: 3 }}>
          <Typography variant="h1">Add Project</Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
