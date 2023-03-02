import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
// import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import Card from "@mui/material/Card";
import TalentCardDescription from "../../TalentListingContainer/TalentCardGallery/TalentCard/TalentCardDescription/TalentCardDescription";
// import TalentCardName from "../../TalentListingContainer/TalentCardGallery/TalentCard/TalentCardName/TalentCardName";

function TalentSingleCard() {
  return (
    <Paper elevation={3} p={2}>
      <Grid container>
        <Grid item xs={12} sm={4} md={2}>
          <Box p={2} sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              alt="Remy Sharp"
              src="http://pngimg.com/uploads/mark_zuckerberg/mark_zuckerberg_PNG35.png"
              sx={{ width: 90, height: 90 }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={6}>
          <Box
            direction="column"
            textAlign={{ xs: "center", sm: "left" }}
            py={2}
          >
            <Typography gutterBottom variant="body1" color="text.secondary">
              Métier (job_id)
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Mark Zuckerberg
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box p={2} sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" startIcon={<SendIcon />}>
              MAIL
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} p={2}>
          <TalentCardDescription />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TalentSingleCard;
