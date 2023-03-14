import * as React from "react";
import { Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function linkToSignInPage() {
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="flex-end"
      spacing={2}
    >
      <Typography variant="h5">Have an account?</Typography>
      <Button type="link" variant="contained" color="primary" href="/login">
        Sign in
      </Button>
    </Stack>
  );
}
