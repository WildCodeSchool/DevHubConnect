import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function UserDashboardHeader() {
  return (
    <Stack spacing={2}>
      <Typography variant="h1">Tableau de bord</Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
    </Stack>
  );
}
