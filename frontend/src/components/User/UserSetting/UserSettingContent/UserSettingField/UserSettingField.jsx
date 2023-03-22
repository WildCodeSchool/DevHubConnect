import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function UserSettingField({ user, setUser }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [cp, setCp] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function fetchDataField() {
      try {
        const response = await axios.get(
          `http://localhost:5007/users/${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setFirstname(response.data.firstname);
        setLastName(response.data.lastname);
        setCp(response.data.cp);
        setEmail(response.data.email);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDataField();
  }, [user.id]);

  const handleFirstnameChange = (event) => {
    const newFirstname = event.target.value;
    setFirstname(newFirstname);
    setUser((prevUser) => ({ ...prevUser, firstname: newFirstname }));
  };

  const handleLastnameChange = (event) => {
    const newLastname = event.target.value;
    setLastName(newLastname);
    setUser((prevUser) => ({ ...prevUser, lastname: newLastname }));
  };

  const handleCpChange = (event) => {
    const newCp = event.target.value;
    setCp(newCp);
    setUser((prevUser) => ({ ...prevUser, cp: newCp }));
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setUser((prevUser) => ({ ...prevUser, email: newEmail }));
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
              value={firstname}
              sx={{ width: { sm: "100%", md: "33%" } }}
              onChange={handleFirstnameChange}
            />
            <TextField
              required
              id="lastName"
              name="lastname"
              label="Prénom"
              value={lastname}
              sx={{ width: { sm: "100%", md: "33%" } }}
              onChange={handleLastnameChange}
            />
            <TextField
              required
              id="CP"
              name="cp"
              label="CP"
              value={cp}
              sx={{ width: { sm: "100%", md: "33%" } }}
              onChange={handleCpChange}
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
  user: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    cp: PropTypes.string,
    id: PropTypes.number,
    job_id: PropTypes.number,
  }).isRequired,
  setUser: PropTypes.func.isRequired,
};
