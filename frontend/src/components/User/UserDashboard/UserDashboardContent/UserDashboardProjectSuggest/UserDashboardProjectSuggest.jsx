import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";

import Typography from "@mui/material/Typography";

export default function UserDashboardProjectSuggest() {
  return (
    <Paper sx={{ width: 1 }} variant="UserDashboardProjectSuggest.background">
      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={{ sm: 1, md: 2 }}
        justifyContent="space-between"
        alignItems="center"
        p={2}
        sx={{
          borderLeft: 4,
          borderColor: "UserDashboardProjectSuggest.border",
        }}
      >
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0.5}
        >
          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={{ sm: 1, md: 2 }}
            justifyContent="space-between"
            alignItems="center"
            sx={{
              width: "100%",
            }}
          >
            <Stack direction={{ sm: "column", md: "column" }} p={0}>
              <Typography component="div" variant="h2">
                Suggest projet
              </Typography>
              <Typography component="div" variant="UserDaskboardSuggestDate">
                Du 23/02/2023 au 12/10/23
              </Typography>
            </Stack>
            <Avatar
              alt="Remy Sharp"
              src="https://xsgames.co/randomusers/avatar.php?g=male"
            />
          </Stack>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={1}
            pt={2}
          >
            <Chip label="Javascript" size="small" />
            <Chip label="Node.js" size="small" />
            <Chip label="React" size="small" />
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
