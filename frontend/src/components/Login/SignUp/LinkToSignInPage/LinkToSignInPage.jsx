import * as React from "react";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function linkToSignInPage() {
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="flex-end"
      spacing={2}
    >
      <Button type="link" variant="text" color="primary" href="/login">
        Vous avez déjà un compte ?
      </Button>
    </Stack>
  );
}
