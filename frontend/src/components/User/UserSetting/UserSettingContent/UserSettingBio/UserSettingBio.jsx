import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

export default function UserSettingBio({ userId }) {
  const [user, setUser] = useState(null);
  const [biography, setBio] = useState("");

  useEffect(() => {
    async function fetchDataBio() {
      try {
        const response = await axios.get(
          `http://localhost:5007/users/${userId}`
        );
        setUser(response.data);
        setBio(response.data.biography);
      } catch (error) {
        console.error(error);
        setUser(null);
      }
    }
    fetchDataBio();
  }, [userId]);

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  return (
    <Paper
      elevation={2}
      sx={{
        color: "UserDashboardCard.color",
        p: 3,
        backgroundColor: "UserSetting.Background",
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        Ta vie en 140 caractères : sois bref et impactant
      </Typography>
      {user ? (
        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="Bio 140 carateres"
          multiline
          value={biography}
          sx={{ mt: 2 }}
          rows={4}
          onChange={handleBioChange}
        />
      ) : (
        <Typography>Chargement...</Typography>
      )}
    </Paper>
  );
}

UserSettingBio.propTypes = {
  userId: PropTypes.number.isRequired,
};
