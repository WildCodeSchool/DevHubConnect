import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import UserProjectCard from "../UserProjectCard/UserProjectCard";

function UserProjectNotSelected() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography variant="subtitle2">Projets non retenus</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          flexWrap="wrap"
          width={1000}
        >
          <UserProjectCard />
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

export default UserProjectNotSelected;
