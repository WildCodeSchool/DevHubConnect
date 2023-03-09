import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function ProjectListingHeader() {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row" }}
      spacing={{ sm: 1, md: 2 }}
      justifyContent="flex-start"
      alignItems="center"
      p={2}
    >
      <Typography gutterBottom variant="h1" component="div">
        Projets
      </Typography>
      <Typography variant="body1">
        Découvrez des projets passionnants et innovants qui témoignent de
        créativité et d'expertise dans divers domaines !"
      </Typography>
    </Stack>
  );
}
export default ProjectListingHeader;
