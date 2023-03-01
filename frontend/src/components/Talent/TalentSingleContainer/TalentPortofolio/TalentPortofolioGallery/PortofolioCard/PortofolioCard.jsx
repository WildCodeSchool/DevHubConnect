import * as React from "react";
// import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
// import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import PortofolioCardImage from "./PortofolioCardImage/PortofolioCardImage";
import PortofolioCardText from "./PortofolioCardText/PortofolioCardText";
import PortofolioCardButton from "./PortofolioCardButton/PortofolioCardButton";

function PortofolioCard() {
  return (
    <Paper elevation={3} p={2}>
      <Stack
        sx={{ maxWidth: 345 }}
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        // sx={{ p: 2, sm: "50%", md: "25%" }}
      >
        <PortofolioCardImage />
        <PortofolioCardText />
        <PortofolioCardButton />
      </Stack>
    </Paper>
  );
}

export default PortofolioCard;
