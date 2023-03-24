import * as React from "react";
import { Box } from "@mui/material";
import Terms from "../components/Policy/TermsAndCondition/TermsAndConditions";

export default function TermsAndCondition() {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Terms />
    </Box>
  );
}
