import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

// UserSettingBio est un composant qui permet de modifier la biographie d'un utilisateur.
export default function UserSettingBio({ user, setUser }) {
  const [biography, setBiography] = useState("");

  // Utilisez l'effet pour récupérer la biographie de l'utilisateur et la définir dans l'état local.
  useEffect(() => {
    async function fetchDataBio() {
      try {
        const response = await axios.get(
          `http://localhost:5007/users/${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setBiography(response.data.biography);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDataBio();
  }, [user.id]);

  // Gère les changements dans le champ de la biographie et met à jour l'état local et l'objet utilisateur.
  const handleBioChange = (event) => {
    const newBio = event.target.value;
    setBiography(newBio);
    setUser((prevUser) => ({ ...prevUser, biography: newBio }));
  };

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="fieldBoxTitle" gutterBottom>
        Ta vie en 140 caractères : sois bref et impactant
      </Typography>
      {user ? (
        <TextField
          fullWidth
          id="bio-field"
          label="Bio 140 caractères"
          multiline
          rows={4}
          variant="outlined"
          value={biography}
          onChange={handleBioChange}
          sx={{ mt: 2 }}
        />
      ) : (
        <Typography>Chargement...</Typography>
      )}
    </Paper>
  );
}

// Mettez à jour les PropTypes pour accepter à la fois les chaînes de caractères et les nombres pour user.id
UserSettingBio.propTypes = {
  user: PropTypes.shape({
    biography: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  setUser: PropTypes.func.isRequired,
};
