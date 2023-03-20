import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "mui-image";
import Neuralink from "../../../../assets/neuralink.jpg";

export default function ProjectFormHeading() {
  return (
    <Paper elevation={8} sx={{ mb: 2 }}>
      <Stack direction="row" justifyContent="space-between">
        <Box sx={{ background: "#FFF", padding: 3 }}>
          <Stack spacing={1}>
            <Typography variant="h1">Création de projet</Typography>
            <Typography variant="h5">Neuralink</Typography>
            <Typography variant="subtitle2" gutterBottom>
              Projet de développement de la connectivité cerveau-machine.
            </Typography>
          </Stack>
        </Box>

        <Box sx={{ background: "#FFF", padding: 3 }}>
          <Box sx={{ height: 117 }}>
            <Image
              src={Neuralink}
              aspectRatio={16 / 9}
              disableSpinner
              sx={{ float: "right" }}
            />
          </Box>
        </Box>
      </Stack>
    </Paper>
  );
}
