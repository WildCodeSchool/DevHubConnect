import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import UserDashboardUserInfo from "./UserDashboardUserInfo/UserDashboardUserInfo";
import UserDashboardCurrentProject from "./UserDashboardCurrentProject/UserDashboardCurrentProject";
import UserDashboardProjectSuggest from "./UserDashboardProjectSuggest/UserDashboardProjectSuggest";

export default function UserDashboardContent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <UserDashboardUserInfo />
            <Typography variant="h5" gutterBottom>
              Mes projets
            </Typography>
            <UserDashboardCurrentProject />
            <UserDashboardCurrentProject />
            <UserDashboardCurrentProject />
            <UserDashboardCurrentProject />
            <UserDashboardCurrentProject />
          </Stack>
        </Grid>
        <Grid item xs={12} md={5}>
          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={{ sm: 1, md: 2 }}
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <Typography variant="h5" gutterBottom>
                Nouveaux projets
              </Typography>
              <UserDashboardProjectSuggest />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
