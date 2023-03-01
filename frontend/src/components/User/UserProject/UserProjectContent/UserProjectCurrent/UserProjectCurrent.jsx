// import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
// import axios from "axios";
import UserProjectCard from "../UserProjectCard/UserProjectCard";

export default function UserProjectCurrent() {
  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="subtitle2">Projets en cours </Typography>
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

// function UserProjects() {
//   const [project, setProject] = useState();

//   const getProjects = () => {
//     axios
//       .get("https://localhosthttp://127.0.0.1:5173/")
//       .then((response) => response.data)
//       .then((data) => {
//         console.log(data);
//         setProject(data.results[0]);
//       });
//   };

//   useEffect(() => {
//     getProjects();
//   }, []);
// }

// export default UserProjectCurrent;
