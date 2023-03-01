import * as React from "react";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import TalentAvatar from "./TalentAvatar/TalentAvatar";
import TalentCardName from "./TalentCardName/TalentCardName";
import TalentCardDescription from "./TalentCardDescription/TalentCardDescription";

function TalentCard() {
  return (
    <Paper elevation={3} p={2}>
      <CardActionArea>
        <Stack
          alignItems="center"
          sx={{ p: 2, sm: "50%", md: "25%" }}
          direction="column"
        >
          <Stack
            direction={{ xs: "row", sm: "row", md: "column" }}
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <TalentAvatar />
            <TalentCardName />
          </Stack>

          <TalentCardDescription />
        </Stack>
      </CardActionArea>
    </Paper>
  );
}

export default TalentCard;
