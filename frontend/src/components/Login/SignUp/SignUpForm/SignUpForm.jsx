import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import {
  Container,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import SignUpContext from "../../../../Contexts/SignUpContext";
import SignUpidentity from "./SignUpIdentity/SignUpIdentity";
import SignUpAboutYou from "./SignUpAboutYou/SignUpAboutYou";
import SignUpSkills from "./SignUpSkills/SignUpSkills";
import SignUpConfirmation from "./SignUpConfirmation/SignUpConfirmation";
import SignUpCompleted from "./SignUpCompleted/SignUpCompleted";

function StepForm() {
  const theme = createTheme();
  const labels = ["Identité", "A Propos", "Compétences", "Confirmation"];
  const { activeStep } = useContext(SignUpContext); // récupération depuis le contexte

  // renvoie le composant selon l'étape stockée dans le contexte
  function handleSteps(step) {
    switch (step) {
      case 0:
        return <SignUpidentity />;
      case 1:
        return <SignUpAboutYou />;
      case 2:
        return <SignUpSkills />;
      case 3:
        return <SignUpConfirmation />;
      case 4:
        return <SignUpCompleted />;
      default:
        throw new Error("Unknown step");
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        {/* affiche soit la page de confirmation soit le formulaire(stepper) */}
        {activeStep === labels.length ? (
          <SignUpCompleted />
        ) : (
          <>
            <Box justifyContent="center" style={{ paddingTop: "2rem" }}>
              <Typography component="h1" variant="h2" align="center">
                Inscription
              </Typography>
              <Typography
                variant="h5"
                align="center"
                style={{ marginTop: "1rem" }}
              >
                Remplissez le formulaire pour vous inscrire.
              </Typography>
            </Box>
            <Stepper
              activeStep={activeStep}
              style={{ paddingTop: "2rem" }}
              alternativeLabel
            >
              {labels.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {handleSteps(activeStep)}
          </>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default StepForm;
