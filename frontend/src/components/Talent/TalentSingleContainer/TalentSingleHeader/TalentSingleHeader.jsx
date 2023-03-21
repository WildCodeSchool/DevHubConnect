import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PropTypes from "prop-types";

function TalentSingleHeader({ job, region, firstName }) {
  // Définition du composant TalentSingleHeader avec les propriétés job, region et firstName
  const [open, setOpen] = useState(false);
  // useState initialise la variable "open" avec valeur false / fonction "setOpen" pour le modifier

  const handleClickOpen = () => {
    // Définition d'une fonction "handleClickOpen"
    setOpen(true);
    // Quand appelée, elle modifie l'état "open" pour le mettre à true
  };

  const handleClose = () => {
    // Définition d'une fonction "handleClose"
    setOpen(false);
    // Quand appelée, elle modifie l'état "open" pour le mettre à false
  };

  return (
    <>
      <Paper elevation={8} sx={{ mb: 2 }}>
        <Box sx={{ width: "100%", background: "#FFF", padding: 3 }}>
          <Stack spacing={2} sx={{ mb: 2 }}>
            <Typography variant="h1">{job}</Typography>{" "}
            {/* la propriété "job" passée en tant que children */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Typography variant="subtitle1" gutterBottom>
                {region}
                {/* la propriété "region" passée en tant que children */}
              </Typography>
              <Box m={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  startIcon={<SendIcon />}
                  onClick={handleClickOpen}
                  // Utilisation de la fonction "handleClickOpen" au clic
                >
                  Contacter {firstName}{" "}
                  {/* Texte du bouton avec la propriété */}
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Paper>
      <Dialog open={open} onClose={handleClose}>
        {/* Utilisation du composant Dialog de Material-UI avec la propriété "open" égale à l'état "open" / utilisation de la fonction "handleClose" au clic fermeture */}
        <DialogTitle>Contactez {firstName}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nom"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="message"
            label="Message"
            type="text"
            multiline
            rows={4}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          {" "}
          {/* affiche les boutons Annuler & Envoyer */}{" "}
          <Button onClick={handleClose}>Annuler</Button>
          {/* au clic, la fonction handleClose ferme la boite de dialogue */}
          <Button onClick={handleClose} variant="contained">
            Envoyer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

TalentSingleHeader.propTypes = {
  job: PropTypes.string,
  region: PropTypes.string,
  firstName: PropTypes.string,
};

TalentSingleHeader.defaultProps = {
  job: "",
  region: "",
  firstName: "",
};

export default TalentSingleHeader;
