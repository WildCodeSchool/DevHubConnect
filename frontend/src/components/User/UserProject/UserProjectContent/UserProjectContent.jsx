import React from "react";
import UserProjectCurrent from "./UserProjectCurrent/UserProjectCurrent";
import UserProjectNotSelected from "./UserProjectNotSelected/UserProjectNotSelected";
import UserProjectUpComing from "./UserProjectUpComing/UserProjectUpComing";

export default function UserProjectContent() {
  return (
    <div>
      <UserProjectCurrent />
      <UserProjectUpComing />
      <UserProjectNotSelected />
    </div>
  );
}
