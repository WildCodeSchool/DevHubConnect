import * as React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { Grid, Button, Stack } from "@mui/material/";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function UserSettingUpdatepassword() {
  const [showPassword, setShowPassword] = React.useState(false);

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("Le mot de passe est requis"),
    confirmPassword: Yup.string()
      .required("La confirmation du mot de passe est requise")
      .oneOf(
        [Yup.ref("password"), null],
        "Les mots de passe doivent correspondre"
      ),
  });

  const onSubmit = async (values) => {
    const { password } = values;
    const userId = parseInt(localStorage.getItem("userId"), 10);
    const token = localStorage.getItem("token");

    try {
      const response = await axios.put(
        `http://localhost:5007/users/${userId}`,
        {
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.info("Password updated successfully:", response.data);
      setSnackbarOpen(true); // Ouvrir le Snackbar
    } catch (error) {
      console.error(
        "Error updating password:",
        error.response ? error.response.statusText : error
      );
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Modifier le mot de passe</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <form onSubmit={formik.handleSubmit}>
          <Typography>Entrez votre nouveau mot de passe</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                color="primary"
                label="Mot de Passe"
                required
                value={formik.values.password}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onMouseDown={() => setShowPassword(true)}
                        onMouseUp={() => setShowPassword(false)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                color="primary"
                label="Confirmez le Mot de Passe"
                required
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onMouseDown={() => setShowPassword(true)}
                        onMouseUp={() => setShowPassword(false)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
            mt={2}
          >
            <Button variant="outlined" type="submit">
              Changer le mot de passe
            </Button>

            <Snackbar
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={handleSnackbarClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              <Alert
                onClose={handleSnackbarClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Mot de passe mis à jour avec succès!
              </Alert>
            </Snackbar>
          </Stack>
        </form>
      </AccordionDetails>
    </Accordion>
  );
}
