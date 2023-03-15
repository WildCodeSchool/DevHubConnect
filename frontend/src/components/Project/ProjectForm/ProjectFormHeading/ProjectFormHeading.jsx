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
      <Stack direction="row" spacing={2}>
        <Box sx={{ width: "70%", background: "#FFF", padding: 3 }}>
          <Stack spacing={2}>
            <Typography variant="h1">Add Project</Typography>
            <Typography variant="h5">Neuralink</Typography>
            <Typography variant="subtitle2" gutterBottom>
              Projet de développement de la connectivité cerveau-machine.
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ width: "30%", background: "#FFF", padding: 3 }}>
          <Stack alignItems="center">
            <Paper sx={{ maxWidth: 180 }}>
              <Image src={Neuralink} aspectRatio={16 / 9} disableSpinner />
            </Paper>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
              >
                submit
              </Button>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}
