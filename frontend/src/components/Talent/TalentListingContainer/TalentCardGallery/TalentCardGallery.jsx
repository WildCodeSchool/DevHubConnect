import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TalentCard from "./TalentCard/TalentCard";

function TalentCardGallery() {
  return (
    <Box sx={{ mt: 2 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="flex-start"
        alignItems="flex-start"
        mt="2"
        sx={{ flexWrap: "wrap", gap: 2 }}
      >
        <TalentCard />
        <TalentCard />
        <TalentCard />
        <TalentCard />
        <TalentCard />
        <TalentCard />
        <TalentCard />
      </Stack>
    </Box>
  );
}

export default TalentCardGallery;
