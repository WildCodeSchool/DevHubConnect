import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link as MuiLink } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import ContainedButtons from "./SignInOAuth/SignInOAuth";
import LogoConnect from "../../Sidebar/Logo";

// Fonction qui renvoie l'élément HTML pour le texte de droits d'auteur
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="http://127.0.0.1:5173/">
        DevHub Connect
      </MuiLink>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

// Création du thème Material UI
const theme = createTheme();

// Composant de la page de connexion
export default function Login() {
  const [tokenIsValid, setTokenIsValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Vérification de la validité du token
    const token = localStorage.getItem("token");
    const userId = parseInt(localStorage.getItem("userId"), 10);

    if (token) {
      axios
        .get(`http://localhost:5007/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          if (response.request.status === 200) {
            setTokenIsValid(true);
          } else {
            localStorage.removeItem("token"); // Supprimez le token si invalide
            localStorage.removeItem("userId");
          }
        })
        .catch((error) => {
          // Traitement de l'erreur
          console.info(error);
        });
    }
  }, []);
  const toggle = parseInt(localStorage.getItem("toggle"), 10);
  // console.log(toggle);
  if (tokenIsValid) {
    if (toggle) {
      localStorage.removeItem("token");
    } else {
      navigate("/dashboard");
    }
  }

  // Utilisation de useState pour gérer les états de l'email, du mot de passe et de l'erreur de connexion
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  // Fonction qui s'exécute lorsque le formulaire est soumis
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Requête POST vers l'API pour se connecter avec les informations d'identification
      const response = await axios.post("http://localhost:5007/users/login", {
        email,
        password,
      });
      // Stockage du jeton d'authentification dans le stockage local de l'application
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId.toString());
      localStorage.setItem("toggle", response.data.toggle.toString());
      // Redirection vers le tableau de bord
      navigate("/dashboard");
    } catch (error) {
      // Affichage d'un message d'erreur si la connexion échoue
      setErr("Invalid email or password");
      // console.error(error.message);
    }
  };
  const handleEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    setErr("");
  };
  const handlePasswordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
    setErr("");
  };
  // console.info(err);
  // Rendu de l'élément HTML pour la page de connexion
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            // marginTop: 8, // pour aligner sur l'image
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <LogoConnect />
          </Box>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleEmailChange}
              value={err ? "" : TextField.value}
              error={Boolean(err)}
              helperText={err ? "Erreur : Invalid email or password" : ""}
              variant="outlined"
              style={{ color: err ? "red" : "" }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePasswordChange}
              value={err ? "" : TextField.value}
              error={Boolean(err)}
              helperText={err ? "Erreur : Invalid email or password" : ""}
              variant="outlined"
              style={{ color: err ? "red" : "" }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="center">
              <Grid item lg>
                <Link to="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <ContainedButtons />
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
