import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import SignUpImage from "@components/Login/SignUp/SignUpImage/SignUpImage";
import LinkToSignInPage from "@components/Login/SignUp/LinkToSignInPage/LinkToSignInPage";
import SignUpForm from "../components/Login/SignUp/SignUpForm/SignUpForm";

export default function SignUp() {
  return (
    <Paper sx={{ width: 1 }}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <Stack>
          <SignUpImage />
        </Stack>
        <Stack spacing={2}>
          <LinkToSignInPage />
          <SignUpForm />
        </Stack>
      </Stack>
    </Paper>
  );
}
