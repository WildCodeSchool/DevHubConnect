import * as React from "react";
import Stack from "@mui/material/Stack";
import ProjectEditHeader from "../components/Project/ProjectEdit/ProjectEditHeader/ProjectEditHeader";
import EditProjectForm from "../components/Project/ProjectEdit/ProjectEditContent/ProjectEditContent";

export default function UserSetting() {
  const projectId = 1; // Remplacez cette ligne par la logique pour obtenir l'ID du projet

  return (
    <Stack spacing={2}>
      <ProjectEditHeader />
      <EditProjectForm projectId={projectId} />
    </Stack>
  );
}
