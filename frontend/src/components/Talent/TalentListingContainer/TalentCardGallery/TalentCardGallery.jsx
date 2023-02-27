import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TalentCard from "./TalentCard/TalentCard";

function TalentCardGallery() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs>
          <TalentCard />
        </Grid>
        <Grid item xs>
          <TalentCard />
        </Grid>
        <Grid item xs>
          <TalentCard />
        </Grid>
        <Grid item xs>
          <TalentCard />
        </Grid>
        <Grid item xs>
          <TalentCard />
        </Grid>
        <Grid item xs>
          <TalentCard />
        </Grid>
        <Grid item xs>
          <TalentCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default TalentCardGallery;
