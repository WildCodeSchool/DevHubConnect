import * as React from "react";
import { Stack, Box } from "@mui/material";
import LinkToSignInPage from "../components/Login/SignUp/LinkToSignInPage/LinkToSignInPage";
import SignUpForm from "../components/Login/SignUp/SignUpForm/SignUpForm";

export default function SignUp() {
  return (
    <Stack direction="row" justifyContent="center">
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Stack
          direction={{ xs: "column", sm: "column", md: "column" }}
          alignItems="center"
        >
          <LinkToSignInPage />
          <SignUpForm />
        </Stack>
      </Box>
    </Stack>
  );
}
