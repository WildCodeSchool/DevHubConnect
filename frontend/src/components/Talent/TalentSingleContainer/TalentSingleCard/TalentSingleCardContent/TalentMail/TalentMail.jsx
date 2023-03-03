import * as React from "react";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";

function TalentMail() {
  return (
    <Box m={2} sx={{ display: "flex", justifyContent: "center" }}>
      <Button variant="contained" startIcon={<SendIcon />}>
        MAIL
      </Button>
    </Box>
  );
}

export default TalentMail;
