/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import UserProjectCard from "../UserProjectCard/UserProjectCard";

function UserProjectUpComing({ upcomingProjects }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography variant="subtitle2">Projets à venir </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          flexWrap="wrap"
          width={1000}
        >
          {upcomingProjects.map((project) => (
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

export default UserProjectUpComing;
