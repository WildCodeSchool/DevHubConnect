import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import UserProjectCard from "../UserProjectCard/UserProjectCard";

export default function UserProjectNotSelected() {
  console.error("UserProjectNotSelected");
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="subtitle2">Projets non retenus</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          p={1}
        >
          <UserProjectCard />
          <UserProjectCard />
          <UserProjectCard />
          <UserProjectCard />
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
