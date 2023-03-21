import React from "react";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function SignUpCompleted() {
  return (
    <Stack>
      <Typography variant="h2" align="center" sx={{ py: 4 }}>
        Merci!
      </Typography>
      <Typography component="p" align="center">
        Vous recevrez un email avec des instructions supplémentaires.
      </Typography>
    </Stack>
  );
}
