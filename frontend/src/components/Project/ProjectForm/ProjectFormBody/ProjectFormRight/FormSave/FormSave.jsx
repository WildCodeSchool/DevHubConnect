import React from "react";
import { Box, Paper, Stack, Button } from "@mui/material";

export default function FormSave() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.info("Coucou");
  };
  return (
    <Paper elevation={8}>
      <Stack direction="row" justifyContent="center">
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Button type="submit" variant="contained" sx={{ mt: 1, mb: 1 }}>
            Enregistrer
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}
