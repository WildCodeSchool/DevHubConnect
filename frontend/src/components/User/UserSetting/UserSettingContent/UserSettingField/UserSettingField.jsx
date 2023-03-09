import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function UserSettingField({ userId }) {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    cp: "",
    email: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:5007/users/${userId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setUser(response.data);
      } catch (error) {
        setUser(null);
      }
    }
    fetchData();
  }, [userId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Stack direction="column" spacing={3}>
        <Typography variant="fieldBoxTitle" gutterBottom>
          Qui es-tu ? Les champs obligatoires ne mentent pas
        </Typography>
        {user ? (
          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={{ xs: 3, sm: 3, md: 2 }}
            sx={{ m: { sm: 3, md: 2 } }}
          >
            <TextField
              required
              id="firstName"
              name="firstname"
              label="Nom"
              value={user.firstname}
              sx={{ width: { sm: "100%", md: "33%" } }}
              onChange={handleChange}
            />
            <TextField
              required
              id="lastName"
              name="lastname"
              label="Prénom"
              value={user.lastname}
              sx={{ width: { sm: "100%", md: "33%" } }}
              onChange={handleChange}
            />
            <TextField
              required
              id="CP"
              name="cp"
              label="CP"
              value={user.cp}
              sx={{ width: { sm: "100%", md: "33%" } }}
              onChange={handleChange}
            />
          </Stack>
        ) : (
          <Typography>Chargement...</Typography>
        )}
        {user ? (
          <Stack direction="row" spacing={3}>
            <TextField
              required
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={user.email}
              onChange={handleChange}
            />
          </Stack>
        ) : null}
      </Stack>
    </Paper>
  );
}

UserSettingField.propTypes = {
  userId: PropTypes.number.isRequired,
};
