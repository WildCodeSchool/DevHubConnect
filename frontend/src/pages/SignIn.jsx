import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SignInComponant from "../components/Login/SignIn/SignInComponant";
import SignInImage from "../components/Login/SignIn/SignInImage/SignInImage";

export default function SignIn() {
  return (
    <Stack direction="row" justifyContent="center">
      <Box>
        <Stack direction="coluwn" alignItems="center">
          <Box sx={{ width: "50%" }}>
            <SignInImage />
          </Box>
          <Box sx={{ width: "50%" }}>
            <SignInComponant />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}
