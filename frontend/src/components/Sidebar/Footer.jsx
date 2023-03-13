import * as React from "react";
import Stack from "@mui/material/Stack";

import { Link as MuiLink } from "@mui/material";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography variant="footer" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="http://localhost:5173/">
        DevHub Connect
      </MuiLink>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function Footer() {
  return (
    <Stack
      direction="column"
      justifyContent="flex-end"
      alignItems="center"
      spacing={1}
      p={2}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <MuiLink href="/terms">
          <Typography variant="footer" align="center">
            Mentions légales
          </Typography>
        </MuiLink>{" "}
        <MuiLink href="/cgu">
          <Typography variant="footer" align="center">
            CGU
          </Typography>
        </MuiLink>{" "}
        <MuiLink href="/forgot-password">
          <Typography variant="footer" align="center">
            MDP oublié
          </Typography>
        </MuiLink>
      </Stack>
      <Copyright />
    </Stack>
  );
}
