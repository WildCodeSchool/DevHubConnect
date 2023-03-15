import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import PropTypes from "prop-types";

export default function ProjectSingleButtonPostuler({ userId, id }) {
  const [open, setOpen] = useState(false);
  const [motivation, setMotivation] = useState("");
  const [candidacy, setCandidacy] = useState(null);
  // const [candidacyEnvoyee, setCandidacyEnvoyee] = useState(false);

  const token = localStorage.getItem("token");

  const hasApplied = candidacy !== null;

  const postCandidacy = () => {
    axios
      .post(
        `http://localhost:5007/candidacies/${id}`, // Include projectId in URL
        { userId, motivation, id }, // Include projectId in the request body
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setCandidacy(response.data);
        console.info(response.data, "PostCandidacies");
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (userId && token) {
      postCandidacy();
    } else {
      setCandidacy(null);
    }
  }, [userId, token]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMotivationChange = (event) => {
    const text = event.target.value;
    if (text.length > 160) {
      setMotivation(text.slice(0, 160));
    } else {
      setMotivation(text);
    }
  };

  const handlePostuler = () => {
    postCandidacy();
    handleClose();
  };

  return (
    <>
      {userId ? (
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          disabled={hasApplied}
        >
          {hasApplied ? "Vous avez déjà postulé" : "Postuler"}
        </Button>
      ) : (
        <Button variant="outlined" onClick={handleClickOpen}>
          Postuler
        </Button>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Postuler pour le projet</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Merci d'indiquer votre motivation en maximum 160 caractères :
          </DialogContentText>
          <TextField
            id="outlined-textarea"
            label="Motivation"
            placeholder="Entrez votre motivation ici"
            multiline
            value={motivation}
            onChange={handleMotivationChange}
            maxRows={4}
            fullWidth
          />
          {motivation.length >= 160 && (
            <p style={{ color: "red" }}>
              Le texte ne doit pas dépasser 160 caractères.
            </p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button
            onClick={handlePostuler}
            disabled={motivation.length === 0 || motivation.length > 160}
          >
            Postuler
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

ProjectSingleButtonPostuler.propTypes = {
  userId: PropTypes.number,
  id: PropTypes.number,
};

ProjectSingleButtonPostuler.defaultProps = {
  userId: "",
  id: "",
};
