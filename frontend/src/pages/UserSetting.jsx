import * as React from "react";
import Stack from "@mui/material/Stack";
import UserSettingHeader from "../components/User/UserSetting/UserSettingHeader/UserSettingHeader";
import UserSettingContent from "../components/User/UserSetting/UserSettingContent/UserSettingContent";

export default function UserSetting() {
  return (
    <Stack spacing={2}>
      <UserSettingHeader />
      <UserSettingContent />
    </Stack>
  );
}
