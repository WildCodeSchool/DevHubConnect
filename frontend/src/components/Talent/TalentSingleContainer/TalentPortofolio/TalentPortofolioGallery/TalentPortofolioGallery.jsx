import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import PortofolioCard from "./PortofolioCard/PortofolioCard";

function TalentPortofolioGallery() {
  return (
    <Box sx={{ mt: 2 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="flex-start"
        alignItems="flex-start"
        mt="2"
        sx={{ flexWrap: "wrap", gap: 2 }}
      >
        <PortofolioCard />
        <PortofolioCard />
        <PortofolioCard />
        <PortofolioCard />
        <PortofolioCard />
        <PortofolioCard />
      </Stack>
    </Box>
  );
}

export default TalentPortofolioGallery;
