/* eslint-disable import/no-cycle */
import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import UserProjectCurrent from "./UserProjectCurrent/UserProjectCurrent";
import UserProjectUpComing from "./UserProjectUpComing/UserProjectUpComing";
import UserProjectNotSelected from "./UserProjectNotSelected/UserProjectNotSelected";
import UserProjectAll from "./UserProjectAll/UserProjectAll";

function UserProjectContent() {
  const [currentProjectsExpanded, setCurrentProjectsExpanded] = useState(false);
  const [upcomingProjectsExpanded, setUpcomingProjectsExpanded] =
    useState(false);
  const [notselectedProjectsExpanded, setNotselectedProjectsExpanded] =
    useState(false);
  const [allProjectsExpanded, setAllProjectsExpanded] = useState(false);

  const handleProjectsClick = (type) => {
    switch (type) {
      case "current":
        setCurrentProjectsExpanded(!currentProjectsExpanded);
        setUpcomingProjectsExpanded(false);
        setNotselectedProjectsExpanded(false);
        setAllProjectsExpanded(false);
        break;
      case "upcoming":
        setCurrentProjectsExpanded(false);
        setUpcomingProjectsExpanded(!upcomingProjectsExpanded);
        setNotselectedProjectsExpanded(false);
        setAllProjectsExpanded(false);
        break;
      case "notselected":
        setCurrentProjectsExpanded(false);
        setUpcomingProjectsExpanded(false);
        setNotselectedProjectsExpanded(!notselectedProjectsExpanded);
        setAllProjectsExpanded(false);
        break;
      case "all":
        setCurrentProjectsExpanded(false);
        setUpcomingProjectsExpanded(false);
        setNotselectedProjectsExpanded(false);
        setAllProjectsExpanded(!allProjectsExpanded);
        break;
      default:
        setCurrentProjectsExpanded(true);
        setUpcomingProjectsExpanded(false);
        setNotselectedProjectsExpanded(false);
        setAllProjectsExpanded(false);
        break;
    }
    const accordions = document.querySelectorAll(".MuiAccordionSummary-root");
    accordions.forEach((accordion) => {
      if (accordion.getAttribute("data-type") === type) {
        accordion.click();
      }
    });
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={4} p={2}>
        <Button
          variant="outlined"
          size="small"
          href="#InProgress"
          sx={{
            backgroundColor: currentProjectsExpanded ? "#ffcc00" : "",
          }}
          onClick={() => handleProjectsClick("current")}
          data-type="current"
        >
          Projets en cours
        </Button>
        <Button
          variant="outlined"
          size="small"
          href="#Pending"
          sx={{
            backgroundColor: upcomingProjectsExpanded ? "#ffcc00" : "",
          }}
          onClick={() => handleProjectsClick("upcoming")}
          data-type="upcoming"
        >
          Projets à venir
        </Button>
        <Button
          variant="outlined"
          size="small"
          href="#Abandoned"
          sx={{
            backgroundColor: notselectedProjectsExpanded ? "#ffcc00" : "",
          }}
          onClick={() => handleProjectsClick("notselected")}
          data-type="notselected"
        >
          Projets non retenus
        </Button>
        <Button
          variant="outlined"
          size="small"
          href="#All"
          sx={{
            backgroundColor: allProjectsExpanded ? "#ffcc00" : "",
          }}
          onClick={() => handleProjectsClick("all")}
          data-type="all"
        >
          Tous les projets
        </Button>
      </Stack>
      <Stack>
        <UserProjectCurrent expanded={currentProjectsExpanded} />
        <UserProjectUpComing expanded={upcomingProjectsExpanded} />
        <UserProjectNotSelected expanded={notselectedProjectsExpanded} />
        <UserProjectAll expanded={allProjectsExpanded} />
      </Stack>
    </Box>
  );
}

export default UserProjectContent;
