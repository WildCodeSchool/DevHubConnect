// Importations des dépendances nécessaires
import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import { format } from "date-fns";
import { useParams, Link } from "react-router-dom";

// Composant ProjectSingleButtonPostuler
export default function ProjectSingleButtonPostuler() {
  // État local pour gérer la boîte de dialogue, les motivations et les données des candidatures
  const [open, setOpen] = useState(false);
  const [motivation, setMotivation] = useState("");
  const [candidacy, setCandidacy] = useState([]);
  const [hasApplied, setHasApplied] = useState(false);
  const [creatorId, setCreatorId] = useState(null);

  // Récupération du token et de l'ID utilisateur depuis le stockage local
  const token = localStorage.getItem("token");
  const userId = parseInt(localStorage.getItem("userId"), 10);

  // Récupération de l'ID du projet à partir de l'URL
  const { id } = useParams();
  const projectId = parseInt(id, 10);

  // Nouvelle candidature
  const newCandidacy = {
    user_id: userId,
    project_id: projectId,
    apply_date: format(new Date(), "yyyy/MM/dd"),
    user_status: 1,
    user_motivation: motivation,
  };

  // Récupérer les candidatures depuis l'API
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

  // Récupérer les informations du projet depuis l'API
  const getProject = () => {
    axios
      .get(`http://localhost:5007/projects/${projectId}`)
      .then((response) => {
        setCreatorId(response.data.creator_id);
        console.info("response.data", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Charger les données des candidatures et du projet
  useEffect(() => {
    getCandidacy();
    getProject();
  }, []);

  // Mettre à jour hasApplied en fonction des données des candidatures
  useEffect(() => {
    setHasApplied(
      candidacy.some(
        (apply) => apply.project_id === projectId && apply.user_id === userId
      )
    );
  }, [candidacy, projectId, userId]);

  // Gérer l'ouverture de la boîte de dialogue
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Gérer la fermeture de la boîte de dialogue
  const handleClose = () => {
    setOpen(false);
  };

  // Gérer la modification de la motivation
  const handleMotivationChange = (event) => {
    const text = event.target.value;
    if (text.length > 160) {
      setMotivation(text.slice(0, 160));
    } else {
      setMotivation(text);
    }
  };

  // Envoyer la candidature à l'API
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
  console.info("userId", userId);
  console.info("creatorId", creatorId);

  // Rendu du composant
  return (
    <>
      {userId && userId === projectId ? (
        <Button
          variant="outlined"
          component={Link}
          to={`/edit-project/${projectId}`}
        >
          Modifier le projet
        </Button>
      ) : (
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          disabled={userId && hasApplied}
        >
          {userId && hasApplied ? "Vous avez déjà postulé" : "Postuler"}
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
            disabled={motivation.length === 0 || motivation.length > 160}
          >
            Valider
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
