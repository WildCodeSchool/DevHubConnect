import * as React from "react";

import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

function TalentCard() {
  return (
    <Paper>
      <CardActionArea sx={{ maxWidth: 500 }}>
        <Stack alignItems="center" direction={{ sm: "row", md: "column" }}>
          <Avatar
            alt="Remy Sharp"
            src="http://pngimg.com/uploads/mark_zuckerberg/mark_zuckerberg_PNG35.png"
            sx={{ width: 90, height: 90 }}
          />
          <Stack>
            <Typography variant="body1" color="text.secondary">
              Métier (job_id)
            </Typography>
            <Typography gutterBottom variant="h2" component="div">
              Mark Zuckerberg
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="body1" color="text.secondary">
          Co-fondateur de Facebook (biography)
        </Typography>
      </CardActionArea>
    </Paper>
  );
}

export default TalentCard;
