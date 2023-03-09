import React from "react";
import Stack from "@mui/material/Stack";
import UserProjectCurrent from "./UserProjectCurrent/UserProjectCurrent";
import UserProjectUpComing from "./UserProjectUpComing/UserProjectUpComing";
import UserProjectNotSelected from "./UserProjectNotSelected/UserProjectNotSelected";

function UserProjectContent() {
  return (
    <div>
      <Stack>
        <UserProjectCurrent />
        <UserProjectUpComing />
        <UserProjectNotSelected />
      </Stack>
    </div>
  );
}

export default UserProjectContent;
