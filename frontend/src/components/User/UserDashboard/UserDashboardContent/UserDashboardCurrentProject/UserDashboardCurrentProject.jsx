import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Stack from "@mui/material/Stack";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";

export default function UserDashboardCurrentProject() {
  return (
    <Paper sx={{ width: 1 }}>
      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={{ sm: 1, md: 2 }}
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <PublishedWithChangesIcon fontSize="large" />
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0.5}
        >
          <Typography component="div" variant="h2">
            Super projet
          </Typography>
          <Typography variant="body1" gutterBottom>
            Du 01/02/2023 au 23/10/2023
          </Typography>
        </Stack>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://xsgames.co/randomusers/avatar.php?g=male"
          />
          <Avatar
            alt="Travis Howard"
            src="https://xsgames.co/randomusers/avatar.php?g=female"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://xsgames.co/randomusers/avatar.php?g=female"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://xsgames.co/randomusers/avatar.php?g=male"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://xsgames.co/randomusers/avatar.php?g=female"
          />
        </AvatarGroup>
      </Stack>
    </Paper>
  );
}
