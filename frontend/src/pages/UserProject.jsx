import * as React from "react";
// eslint-disable-next-line import/no-unresolved
import UserProjectCurrentProject from "@components/User/UserProject/UserProjectCurrentProject/UserProjectCurrentProject";
// eslint-disable-next-line import/no-unresolved
import UserProjectHeader from "@components/User/UserProject/UserProjectHeader/UserProjectHeader";

export default function UserProject() {
  return (
    <div>
      <UserProjectHeader />
      <UserProjectCurrentProject />
    </div>
  );
}
