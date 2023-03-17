import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "mui-image";
import Neuralink from "../../../../assets/neuralink.jpg";

export default function ProjectFormHeading() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.info("Coucou");
  };
  return (
    <Paper elevation={8} sx={{ mb: 2 }}>
      <Stack direction="row">
        <Box sx={{ width: "85%", background: "#FFF", padding: 3 }}>
          <Stack spacing={2}>
            <Typography variant="h1">Création de projet</Typography>
            <Typography variant="h5">Neuralink</Typography>
            <Typography variant="subtitle2" gutterBottom>
              Projet de développement de la connectivité cerveau-machine.
            </Typography>
          </Stack>
        </Box>

        <Box sx={{ background: "#FFF", padding: 3 }}>
          <Stack justifyContent="space-between" alignItems="center">
            <Box sx={{ height: 80 }}>
              <Image
                src={Neuralink}
                aspectRatio={16 / 9}
                disableSpinner
                sx={{ objectFit: "contain", maxWidth: 200, maxHeight: 200 }}
              />
            </Box>
            <Box
              sx={{ height: 50 }}
              component="form"
              onSubmit={handleSubmit}
              noValidate
            >
              <Button type="submit" variant="contained" sx={{ mt: 1, mb: 1 }}>
                Valider
              </Button>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}
