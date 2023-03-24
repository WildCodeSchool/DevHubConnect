import React from "react";
import { Box, TextField, Button, Typography, Stack } from "@mui/material";

export default function LostPassword() {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici le code pour envoyer l'email de réinitialisation de mot de passe
  };

  return (
    <Stack alignItems="center">
      <Box sx={{ width: "90%", maxWidth: 900, mt: 3 }}>
        <Typography component="div" variant="h1">
          Lost Password
        </Typography>
        <p>Vous avez oublié votre mot de passe ?</p>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            id="email"
            label="Adresse e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            margin="normal"
          />
          <Button type="submit" variant="contained" sx={{ mt: 3 }}>
            Réinitialiser le mot de passe
          </Button>
        </form>
      </Box>
    </Stack>
  );
}
