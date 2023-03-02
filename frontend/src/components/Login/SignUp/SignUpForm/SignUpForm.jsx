import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import SignUpContext from "../../../../Contexts/SignUpContext";
import SignUpidentity from "./SignUpIdentity/SignUpIdentity";
import SignUpAboutYou from "./SignUpAboutYou/SignUpAboutYou";
import SignUpSkills from "./SignUpSkills/SignUpSkills";
import SignUpConfirmation from "./SignUpConfirmation/SignUpConfirmation";
import SignUpCompleted from "./SignUpCompleted/SignUpCompleted";

function StepForm() {
  const labels = ["Identity", "About you", "Skills", "Confirmation"];
  const { activeStep } = useContext(SignUpContext);
  // console.log("form activestep", activeStep);
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
    <Paper>
      {activeStep === labels.length ? (
        <SignUpCompleted />
      ) : (
        <>
          <Box style={{ marginTop: "5rem" }}>
            <Typography variant="h1">User Sign Up</Typography>
            <Typography
              variant="subtitle2"
              align="center"
              style={{ marginTop: "2rem" }}
            >
              Fill the form to sign up.
            </Typography>
          </Box>
          <Stepper
            activeStep={activeStep}
            style={{ paddingTop: "3rem" }}
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
    </Paper>
  );
}

export default StepForm;
