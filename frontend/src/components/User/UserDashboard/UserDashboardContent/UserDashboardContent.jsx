import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import UserDashboardUserInfo from "./UserDashboardUserInfo/UserDashboardUserInfo";
import UserDashboardCurrentProject from "./UserDashboardCurrentProject/UserDashboardCurrentProject";

export default function UserDashboardContent() {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
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
        <UserDashboardUserInfo />
      </Stack>
    </Stack>
  );
}
