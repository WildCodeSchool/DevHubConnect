import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function UserSettingField({ userId }) {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [CP, setCP] = useState("");
  const [email, setEmail] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:5007/users/${userId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setUser(response.data);
        setFirstName(response.data.firstname);
        setLastName(response.data.lastname);
        setCP(response.data.cp);
        setEmail(response.data.email);
        // console.info("user : ", response.data);
      } catch (error) {
        // console.error(error);
        setUser(null);
      }
    }
    fetchData();
  }, [userId]);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setUser({ ...user, firstname: event.target.value });
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setUser({ ...user, lasttname: event.target.value });
  };

  const handleCPChange = (event) => {
    setCP(event.target.value);
    setUser({ ...user, cp: event.target.value });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setUser({ ...user, email: event.target.value });
  };

  return (
    <Paper
      elevation={2}
      sx={{
        color: "UserSetting.color",
        p: 3,
        backgroundColor: "UserSetting.Background",
      }}
    >
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
              label="Nom"
              value={firstName}
              sx={{ width: { sm: "100%", md: "33%" } }}
              onChange={handleFirstNameChange}
            />
            <TextField
              required
              id="lastName"
              label="Prénom"
              value={lastName}
              sx={{ width: { sm: "100%", md: "33%" } }}
              onChange={handleLastNameChange}
            />
            <TextField
              required
              id="CP"
              label="CP"
              value={CP}
              sx={{ width: { sm: "100%", md: "33%" } }}
              onChange={handleCPChange}
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
              label="Email"
              value={email}
              onChange={handleEmailChange}
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
