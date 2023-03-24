import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import UserProjectCurrent from "./UserProjectCurrent/UserProjectCurrent";
import UserProjectUpComing from "./UserProjectUpComing/UserProjectUpComing";
import UserProjectNotSelected from "./UserProjectNotSelected/UserProjectNotSelected";
import UserProjectAll from "./UserProjectAll/UserProjectAll";

function UserProjectContent() {
  const [currentProjectsExpanded, setCurrentProjectsExpanded] = useState(true);
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
        setCurrentProjectsExpanded(false);
        setUpcomingProjectsExpanded(false);
        setNotselectedProjectsExpanded(false);
        setAllProjectsExpanded(false);
        break;
    }
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={2}>
        <Button
          variant="outlined"
          size="normal"
          href="#InProgress"
          sx={{
            backgroundColor: currentProjectsExpanded ? "#0088CC" : "",
            color: currentProjectsExpanded ? "#FFF" : "",
          }}
          onClick={() => handleProjectsClick("current")}
        >
          Projets en cours
        </Button>
        <Button
          variant="outlined"
          size="small"
          href="#Pending"
          sx={{
            backgroundColor: upcomingProjectsExpanded ? "#0088CC" : "",
            color: upcomingProjectsExpanded ? "#FFF" : "",
          }}
          onClick={() => handleProjectsClick("upcoming")}
        >
          Projets à venir
        </Button>
        <Button
          variant="outlined"
          size="small"
          href="#Abandoned"
          sx={{
            backgroundColor: notselectedProjectsExpanded ? "#0088CC" : "",
            color: notselectedProjectsExpanded ? "#FFF" : "",
          }}
          onClick={() => handleProjectsClick("notselected")}
        >
          Projets non retenus
        </Button>
        <Button
          variant="outlined"
          size="small"
          href="#All"
          sx={{
            backgroundColor: allProjectsExpanded ? "#0088CC" : "",
            color: allProjectsExpanded ? "#FFF" : "",
          }}
          onClick={() => handleProjectsClick("all")}
        >
          Tous les projets
        </Button>
      </Stack>
      <Stack>
        <UserProjectCurrent
          expanded={currentProjectsExpanded}
          onClick={() => handleProjectsClick("current")}
        />
        <UserProjectUpComing
          expanded={upcomingProjectsExpanded}
          onClick={() => handleProjectsClick("upcoming")}
        />
        <UserProjectNotSelected
          expanded={notselectedProjectsExpanded}
          onClick={() => handleProjectsClick("notselected")}
        />
        <UserProjectAll
          expanded={allProjectsExpanded}
          onClick={() => handleProjectsClick("all")}
        />
      </Stack>
    </Box>
  );
}

export default UserProjectContent;
