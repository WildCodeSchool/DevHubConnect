import * as React from "react";
import { Box, Typography, Stack } from "@mui/material";
import TermsOfUse from "../components/Policy/TermsOfUse/TermsOfUse";

export default function CGU() {
  return (
    <Stack alignItems="center">
      <Box sx={{ width: "90%", maxWidth: 900, mt: 3 }}>
        <Typography component="div" variant="h1" sx={{ mb: 3 }}>
          CGU
        </Typography>
        <TermsOfUse />
      </Box>
    </Stack>
  );
}
