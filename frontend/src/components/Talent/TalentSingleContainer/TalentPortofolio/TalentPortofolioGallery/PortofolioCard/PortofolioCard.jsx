import * as React from "react";
// import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import PortofolioCardImage from "./PortofolioCardImage/PortofolioCardImage";
import PortofolioCardText from "./PortofolioCardText/PortofolioCardText";
import PortofolioCardButton from "./PortofolioCardButton/PortofolioCardButton";

function PortofolioCard() {
  return (
    <Paper>
      <Card sx={{ maxWidth: 345 }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <PortofolioCardImage />
          <PortofolioCardText />
          <PortofolioCardButton />
        </Stack>
      </Card>
    </Paper>
  );
}

export default PortofolioCard;
