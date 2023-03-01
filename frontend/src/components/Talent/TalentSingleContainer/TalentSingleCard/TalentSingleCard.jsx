import * as React from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
// import Card from "@mui/material/Card";
import TalentCardDescription from "../../TalentListingContainer/TalentCardGallery/TalentCard/TalentCardDescription/TalentCardDescription";
import TalentCardName from "../../TalentListingContainer/TalentCardGallery/TalentCard/TalentCardName/TalentCardName";
// import TalentCardName from "../Talent/TalentListingContainer/TalentCardGallery/TalentCard/TalentCardName/TalentCardName";
// import TalentCardDescription from "@components/Talent/TalentListingContainer/TalentCardGallery/TalentCard/TalentCardDescription/TalentCardDescription";

function TalentSingleCard() {
  return (
    <Paper elevation={3} p={2}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            xs={12}
            container
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ xs: "column", sm: "row" }}
            sx={{ fontSize: "12px" }}
          >
            <Grid sx={{ order: { xs: 2, sm: 1 } }}>
              <Stack>
                <TalentCardName />
              </Stack>
            </Grid>

            <Grid container columnSpacing={1} sx={{ order: { xs: 2, sm: 1 } }}>
              <Grid>
                <Button variant="contained" startIcon={<SendIcon />}>
                  Message
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={12} lg={12}>
            <TalentCardDescription />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default TalentSingleCard;
