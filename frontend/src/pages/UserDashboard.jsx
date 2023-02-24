import * as React from "react";
import Stack from "@mui/material/Stack";
import UserDashboardHeader from "../components/User/UserDashboard/UserDashboardHeader/UserDashboardHeader";
import UserDashboardContent from "../components/User/UserDashboard/UserDashboardContent/UserDashboardContent";

export default function UserDashboard() {
  return (
    <Stack spacing={2}>
      <UserDashboardHeader />
      <UserDashboardContent />
    </Stack>
  );
}
