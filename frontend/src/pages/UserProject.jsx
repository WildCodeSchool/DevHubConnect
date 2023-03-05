/* eslint-disable import/no-unresolved */
import * as React from "react";
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
