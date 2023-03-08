import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TalentSelectRegion from "./TalentSelectRegion/TalentSelectRegion";
import TalentSelectSkills from "./TalentSelectSkills/TalentSelectSkills";
import TalentSelectJob from "./TalentSelectJob/TalentSelectJob";

function TalentListingFilter() {
  return (
    <Box sx={{ mt: 2 }}>
      <Stack
        direction={{
          sm: "column",
          md: "row",
        }}
        justifyContent={{
          xs: "center",
          sm: "center",
          md: "flex-start",
        }}
        spacing={{ xs: 1, sm: 2 }}
        size={{ xs: "100%", sm: "33%", md: "20%" }}
      >
        <TalentSelectJob />
        <TalentSelectSkills />
        <TalentSelectRegion />
      </Stack>
    </Box>
  );
}

export default TalentListingFilter;
