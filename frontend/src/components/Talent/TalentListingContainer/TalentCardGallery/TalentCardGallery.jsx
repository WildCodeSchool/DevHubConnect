import * as React from "react";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TalentCard from "./TalentCard/TalentCard";

function TalentCardGallery() {
  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ mt: 1, mb: 1, backgroundColor: "pink" }}
      >
        <TalentCard />
        <TalentCard />
        <TalentCard />
        <TalentCard />
        <TalentCard />
        <TalentCard />
        <TalentCard />
      </Stack>
    </div>
  );
}

export default TalentCardGallery;
