import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { Paper, FormControl, Snackbar, Alert } from "@mui/material";

export default function FormDownloads({ setProjectImg }) {
  // Initialisation de la variable d'état snackbarOpen avec la valeur false
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  // Fonction qui gère l'upload de l'image
  const handleImageUpload = async (event) => {
    // Vérification que l'utilisateur a bien sélectionné une image
    if (event.target.files && event.target.files[0]) {
      // Récupération du fichier image
      const imgFile = event.target.files[0];
      // Récupération du token JWT stocké dans le localStorage
      const token = localStorage.getItem("token");
      // Création d'un objet FormData pour envoyer le fichier image avec la requête POST
      const formData = new FormData();
      formData.append("upload", imgFile);

      try {
        // Envoi de la requête POST à l'API avec le fichier image et le token d'autorisation
        axios
          .post("http://localhost:5007/uploadImage/", formData, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            // Si la requête est un succès, stocker le nom de fichier renvoyé par l'API en utilisant setProjectImg
            setProjectImg(response?.data?.filename);
            // Si la réponse est un succès (code 200), afficher une boîte de dialogue Snackbar en utilisant setSnackbarOpen
            if (response?.status === 200) setSnackbarOpen(true);
          });
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  // Fonction qui gère la fermeture de la boîte de dialogue Snackbar
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  // Le code JSX qui définit le formulaire de téléchargement d'image et la boîte de dialogue Snackbar
  return (
    <Paper elevation={2} sx={{ p: 2, width: "100%" }}>
      <FormControl sx={{ m: 0, width: "100%" }}>
        <TextField
          label="Image du projet"
          name="project_image"
          encType="multipart/form-data"
          type="file"
          helperText="Le fichier doit être une image valide (jpg, png, gif, svg) et ne doit pas dépasser 2 Mo"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            accept: "image/*",
          }}
          onChange={(event) => {
            // Appel de la fonction handleImageUpload lorsqu'un utilisateur sélectionne un fichier
            handleImageUpload(event);
          }}
        />
      </FormControl>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Enregistrement effectué avec succès!
        </Alert>
      </Snackbar>
    </Paper>
  );
}
// Définition des types d'arguments attendus par le composant

FormDownloads.propTypes = {
  setProjectImg: PropTypes.func,
};

FormDownloads.defaultProps = {
  setProjectImg: "",
};
