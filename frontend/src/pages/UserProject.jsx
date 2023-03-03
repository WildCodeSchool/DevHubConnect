/* eslint-disable import/no-unresolved */
import * as React from "react";
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-unresolved
import UserProjectHeader from "@components/User/UserProject/UserProjectHeader/UserProjectHeader";
import UserProjectContent from "@components/User/UserProject/UserProjectContent/UserProjectContent";

export default function UserProject() {
  return (
    <div>
      <UserProjectHeader />
      <UserProjectContent />
    </div>
  );
}
