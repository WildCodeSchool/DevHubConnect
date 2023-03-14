import * as React from "react";
import Stack from "@mui/material/Stack";
import UserProjectHeader from "../components/User/UserProject/UserProjectHeader/UserProjectHeader";
import UserProjectContent from "../components/User/UserProject/UserProjectContent/UserProjectContent";

export default function UserProject() {
  return (
    <Stack spacing={2}>
      <UserProjectHeader />
      <UserProjectContent />
    </Stack>
  );
}
