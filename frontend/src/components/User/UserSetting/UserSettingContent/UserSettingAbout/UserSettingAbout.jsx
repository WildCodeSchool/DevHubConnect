import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

export default function UserSettingAbout({ userId }) {
  const [user, setUser] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchDataAbout() {
      try {
        const response = await axios.get(
          `http://localhost:5007/users/${userId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setUser(response.data);
      } catch (error) {
        console.error(error);
        setUser(null);
      }
    }
    fetchDataAbout();
  }, [userId, token]);

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
        Résume de ta vie en quelques mots : fais-moi rêver
      </Typography>
      {user ? (
        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="A propos de vous"
          multiline
          value={user.about}
          rows={20}
          sx={{ mt: 2 }}
        />
      ) : (
        <Typography>Chargement...</Typography>
      )}
    </Paper>
  );
}

UserSettingAbout.propTypes = {
  userId: PropTypes.number.isRequired,
};
