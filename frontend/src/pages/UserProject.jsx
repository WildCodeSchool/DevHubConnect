import * as React from "react";
// eslint-disable-next-line import/no-unresolved
import UserProjectContent from "@components/User/UserProject/UserProjectContent/UserProjectContent";
// eslint-disable-next-line import/no-unresolved
import UserProjectHeader from "@components/User/UserProject/UserProjectHeader/UserProjectHeader";

export default function UserProject() {
  return (
    <div>
      <UserProjectHeader />
      <UserProjectContent />
    </div>
  );
}
