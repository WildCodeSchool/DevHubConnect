import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";

function TalentMail() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" startIcon={<SendIcon />}>
        MAIL
      </Button>
      <Button variant="contained" startIcon={<ContactMailRoundedIcon />}>
        MAIL
      </Button>
    </Stack>
  );
}

export default TalentMail;
