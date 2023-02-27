import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import UserDashboardUserInfo from "./UserDashboardUserInfo/UserDashboardUserInfo";
import UserDashboardCurrentProject from "./UserDashboardCurrentProject/UserDashboardCurrentProject";
import UserDashboardCalendar from "./UserDashboardCalendar/UserDashboardCalendar";
import UserDashboardProjectSuggest from "./UserDashboardProjectSuggest/UserDashboardProjectSuggest";

export default function UserDashboardContent() {
  return (
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
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <UserDashboardCalendar />
        <Typography variant="h5" gutterBottom>
          Nouveaux projets
        </Typography>
        <UserDashboardProjectSuggest />
        <UserDashboardProjectSuggest />
      </Stack>
    </Stack>
  );
}
