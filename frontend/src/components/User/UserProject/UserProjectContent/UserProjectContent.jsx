import React from "react";
import Stack from "@mui/material/Stack";
import UserProjectCurrent from "./UserProjectCurrent/UserProjectCurrent";
import UserProjectUpComing from "./UserProjectUpComing/UserProjectUpComing";
import UserProjectNotSelected from "./UserProjectNotSelected/UserProjectNotSelected";
import UserProjectAll from "./UserProjectAll/UserProjectAll";

function UserProjectContent() {
  return (
    <div>
      <Stack>
        <UserProjectCurrent />
        <UserProjectUpComing />
        <UserProjectNotSelected />
        <UserProjectAll />
      </Stack>
    </div>
  );
}

export default UserProjectContent;
