import * as React from "react";
import { Stack, Box } from "@mui/material";
import SignUpImage from "@components/Login/SignUp/SignUpImage/SignUpImage";
import LinkToSignInPage from "@components/Login/SignUp/LinkToSignInPage/LinkToSignInPage";
import SignUpForm from "../components/Login/SignUp/SignUpForm/SignUpForm";

export default function SignUp() {
  return (
    <Stack direction="row" justifyContent="center">
      <Box>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          alignItems="center"
        >
          <Box sx={{ width: "50%" }}>
            <SignUpImage />
          </Box>
          <Box sx={{ width: "50%" }}>
            <LinkToSignInPage />
            <SignUpForm />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}
