import React, { useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function UserSettingImage({ user, setUser }) {
  // Récupérer l'ID de l'utilisateur à partir du localStorage
  const userId = localStorage.getItem("userId");

  // Récupérer l'image de l'utilisateur à partir de l'API lors du montage du composant
  useEffect(() => {
    async function fetchDataImage() {
      try {
        const response = await axios.get(
          `http://localhost:5007/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        // Mettre à jour l'image de l'utilisateur dans l'état du composant
        setUser((prevUser) => ({
          ...prevUser,
          userImage: response.data.user_image,
        }));
      } catch (error) {
        console.error(error);
      }
    }
    fetchDataImage();
  }, [userId]);

  // Gestionnaire pour télécharger l'image de l'utilisateur
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("user_image", file);

    try {
      const response = await axios.post(
        `http://localhost:5007/users/${userId}/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Mettre à jour l'image de l'utilisateur dans l'état du composant après le téléchargement
      setUser((prevUser) => ({
        ...prevUser,
        userImage: response.data.user_image,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  // Affichage du composant
  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      {user ? (
        <TextField
          label="Image de profil"
          name="user_image"
          type="file"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            accept: "image/*",
          }}
          onChange={handleImageUpload}
        />
      ) : (
        <Typography>Chargement...</Typography>
      )}
    </Paper>
  );
}

UserSettingImage.propTypes = {
  user: PropTypes.shape({
    userImage: PropTypes.string,
    id: PropTypes.number.isRequired,
  }).isRequired,
  setUser: PropTypes.func.isRequired,
};
