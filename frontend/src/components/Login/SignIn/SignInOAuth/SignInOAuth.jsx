import * as React from "react";
import Button from "@mui/material/Button";
import google from "../../../../assets/google.svg";
import github from "../../../../assets/github.svg";

export default function ContainedButtons() {
  return (
    <div>
      <Button
        sx={{ mt: 1 }}
        variant="outlined"
        color="primary"
        startIcon={<img src={google} alt="google" />}
        size="medium"
        fullWidth
      >
        Sign in With Google
      </Button>
      <Button
        sx={{ mt: 1, mb: 1 }}
        variant="outlined"
        color="inherit"
        startIcon={<img src={github} alt="github" />}
        size="medium"
        fullWidth
      >
        Sign in with GitHub
      </Button>
    </div>
  );
}
