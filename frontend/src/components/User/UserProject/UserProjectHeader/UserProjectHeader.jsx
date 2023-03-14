import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Chip } from "@mui/material";
import { Link } from "react-router-dom";

function UserProjectHeader() {
  const handleClick = () => {
    console.info("You clicked the Header Chip.");
  };

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        p={1}
      />
      <Typography gutterBottom variant="h1" component="div">
        UserProject
      </Typography>
      <Typography variant="body2">
        <Stack direction={{ xs: "column", sm: "row" }} spacing={4} p={2}>
          <Link to="/dashboard/my-project " style={{ textDecoration: "none" }}>
            <Chip
              label="Projets en cours"
              size="medium"
              color="primary"
              onClick={handleClick}
            />
          </Link>
          <Link to="/dashboard/my-project" style={{ textDecoration: "none" }}>
            <Chip
              label="Projets à venir"
              size="medium"
              color="primary"
              onClick={handleClick}
            />
          </Link>
          <Link
            to="/dashboard/my-project id="
            projets-non-retenus
            style={{ textDecoration: "none" }}
          >
            <Chip
              label="Projets non retenus"
              size="medium"
              color="primary"
              onClick={handleClick}
            />
          </Link>
          <Link to="/dashboard/my-project" style={{ textDecoration: "none" }}>
            <Chip
              label="Tous les projets"
              size="medium"
              color="primary"
              onClick={handleClick}
            />
          </Link>
        </Stack>
      </Typography>
    </>
  );
}

export default UserProjectHeader;
