import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import UserDashboardUserInfo from "./UserDashboardUserInfo/UserDashboardUserInfo";
import UserDashboardCurrentProject from "./UserDashboardCurrentProject/UserDashboardCurrentProject";
import UserDashboardProjectSuggest from "./UserDashboardProjectSuggest/UserDashboardProjectSuggest";
import MyCalendar from "../../UserCalendar/UserCalendar";

export default function UserDashboardContent() {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <Typography variant="UserDashboardTitle" gutterBottom>
              Vos infos
            </Typography>
            <UserDashboardUserInfo />
            <Typography
              variant="UserDashboardTitle"
              gutterBottom
              sx={{ pt: 4 }}
            >
              Vos projets en cours
            </Typography>
            <UserDashboardCurrentProject />
            <Link href="/dashboard/my-project" variant="body2" underline="none">
              <Button variant="outlined" size="small">
                Voir tous mes projets
              </Button>
            </Link>
            <Typography
              variant="UserDashboardTitle"
              gutterBottom
              sx={{ pt: 4 }}
            >
              My calendar
            </Typography>
            <MyCalendar />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
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
              <Typography variant="UserDashboardTitle" gutterBottom>
                Nouveaux projets
              </Typography>
              <UserDashboardProjectSuggest />
              <Link href="/project" variant="body2" underline="none">
                <Button variant="outlined" size="small">
                  Voir tous les projets
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
