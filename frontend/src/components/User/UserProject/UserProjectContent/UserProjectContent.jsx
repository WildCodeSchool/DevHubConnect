/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from "react";
import Stack from "@mui/material/Stack";
import UserProjectCurrent from "./UserProjectCurrent/UserProjectCurrent";
import UserProjectUpComing from "./UserProjectUpComing/UserProjectUpComing";
import UserProjectNotSelected from "./UserProjectNotSelected/UserProjectNotSelected";

export default function UserProjectContent() {
  return (
    <div>
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4, ml: 25 }}
        flexWrap="wrap"
        width={1000}
      >
        <UserProjectCurrent />
        <UserProjectUpComing />
        <UserProjectNotSelected />
      </Stack>
    </div>
  );
}
