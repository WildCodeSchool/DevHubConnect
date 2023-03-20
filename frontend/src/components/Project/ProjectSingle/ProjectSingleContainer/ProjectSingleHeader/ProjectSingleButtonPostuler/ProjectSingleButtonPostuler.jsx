import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { format } from "date-fns";
import { useParams } from "react-router-dom";

export default function ProjectSingleButtonPostuler() {
  const [open, setOpen] = useState(false);
  const [motivation, setMotivation] = useState("");
  const [candidacy, setCandidacy] = useState([]);
  const [hasApplied, setHasApplied] = useState(false);

  const token = localStorage.getItem("token");
  const userId = parseInt(localStorage.getItem("userId"), 10);
  const { id } = useParams();
  const projectId = parseInt(id, 10);

  const newCandidacy = {
    user_id: userId,
    project_id: projectId,
    apply_date: format(new Date(), "yyyy/MM/dd"),
    user_status: 1,
    user_motivation: motivation,
  };

  const getCandidacy = () => {
    axios
      .get("http://localhost:5007/candidacies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((candidacyData) => {
        setCandidacy(candidacyData);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getCandidacy();
  }, []);

  useEffect(() => {
    setHasApplied(
      candidacy.some(
        (apply) => apply.project_id === projectId && apply.user_id === userId
      )
    );
  }, [candidacy, projectId, userId]);

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

  const postCandidacy = () => {
    axios
      .post(`http://localhost:5007/candidacies`, newCandidacy, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setHasApplied(true);
      })
      .catch((error) => {
        console.error(error);
      });
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
            onClick={() => {
              postCandidacy();
            }}
            disabled={motivation.length === 0 || motivation.length >= 160}
          >
            Valider
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
