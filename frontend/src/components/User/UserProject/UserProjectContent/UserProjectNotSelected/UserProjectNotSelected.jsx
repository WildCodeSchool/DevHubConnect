/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import UserProjectCard from "../UserProjectCard/UserProjectCard";

function UserProjectNotSelected({ notSelectedProjects }) {
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
          {notSelectedProjects.map((project) => (
            <UserProjectCard
              key={project.id}
              projectName={project.project_name}
              projectDescription={project.project_description}
            />
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

export default UserProjectNotSelected;
