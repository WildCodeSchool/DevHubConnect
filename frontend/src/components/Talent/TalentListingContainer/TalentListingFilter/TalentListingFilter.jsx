import * as React from "react";
// import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
// import { styled } from "@mui/material/styles";
import TalentSelectRegion from "./TalentSelectRegion/TalentSelectRegion";
import TalentSelectSkills from "./TalentSelectSkills/TalentSelectSkills";
import TalentSelectJob from "./TalentSelectJob/TalentSelectJob";

function TalentListingFilter() {
  return (
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
      sx={{ mt: 1, mb: 1, backgroundColor: "#FFFFCC" }}
    >
      <TalentSelectJob />
      <TalentSelectSkills />
      <TalentSelectRegion />
    </Stack>
  );
}

export default TalentListingFilter;
