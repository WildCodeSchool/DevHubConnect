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
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Paper elevation={8} sx={{ mb: 2 }}>
        <Box sx={{ width: "100%", background: "#FFF", padding: 3 }}>
          <Stack spacing={2} sx={{ mb: 2 }}>
            <Typography variant="h1">{job}</Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Typography variant="subtitle1" gutterBottom>
                {region}
              </Typography>
              <Box m={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  startIcon={<SendIcon />}
                  onClick={handleClickOpen}
                >
                  Contacter {firstName}
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Paper>
      <Dialog open={open} onClose={handleClose}>
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
          <Button onClick={handleClose}>Annuler</Button>
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
