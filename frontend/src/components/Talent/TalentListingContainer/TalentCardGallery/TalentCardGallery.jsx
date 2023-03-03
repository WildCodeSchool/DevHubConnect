// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TalentCard from "./TalentCard/TalentCard";

function TalentCardGallery() {
  // const [talent, setTalent] = useState([]);

  const getTalents = () => {
    axios
      .get("http://localhost:5000/user")
      .then((response) => response.data)
      // eslint-disable-next-line no-undef
      .then((data) => setTalent(data));
    // eslint-disable-next-line no-undef
    console.info(data);
  };

  useEffect(() => {
    getTalents();
  }, []);

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
