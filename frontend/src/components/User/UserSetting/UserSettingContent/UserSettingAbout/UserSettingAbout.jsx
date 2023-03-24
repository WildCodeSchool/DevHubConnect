import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

export default function UserSettingAbout({ user, setUser }) {
  const [about, setAbout] = useState(user.about);

  useEffect(() => {
    async function fetchDataAbout() {
      try {
        const response = await axios.get(
          `http://localhost:5007/users/${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setAbout(response.data.about);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDataAbout();
  }, [user.id]);

  const handleAboutChange = (event) => {
    const newAbout = event.target.value;
    setAbout(newAbout);
    setUser((prevUser) => ({ ...prevUser, about: newAbout }));
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
      <Typography variant="fieldBoxTitle" gutterBottom>
        Résume de ta vie en quelques mots : fais-moi rêver
      </Typography>
      {user ? (
        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="A propos de vous"
          multiline
          value={about}
          rows={20}
          sx={{ mt: 2 }}
          onChange={handleAboutChange}
        />
      ) : (
        <Typography>Chargement...</Typography>
      )}
    </Paper>
  );
}

UserSettingAbout.propTypes = {
  user: PropTypes.shape({
    about: PropTypes.string,
    id: PropTypes.number,
  }),
  setUser: PropTypes.func.isRequired,
};

UserSettingAbout.defaultProps = {
  user: {
    about: "",
    id: null,
  },
};
