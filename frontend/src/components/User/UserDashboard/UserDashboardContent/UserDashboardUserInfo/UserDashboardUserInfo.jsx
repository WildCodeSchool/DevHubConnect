import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";

export default function UserDashboardUserInfo() {
  return (
    <Paper>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        p={2}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://xsgames.co/randomusers/avatar.php?g=male"
          sx={{ width: 100, height: 100 }}
        />
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0.5}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={0.5}
          >
            <Typography variant="subtitle1" gutterBottom>
              Immortel
            </Typography>
            <CreateOutlinedIcon fontSize="small" />
          </Stack>
          <Typography component="div" variant="h5">
            Michel Drucker
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}
