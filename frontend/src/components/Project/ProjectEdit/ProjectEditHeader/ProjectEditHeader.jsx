import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function ProjectEditHeader() {
  return (
    <Paper elevation={8} sx={{ mb: 2 }}>
      <Box sx={{ width: "100%", background: "#FFF", padding: 3 }}>
        <Stack spacing={2}>
          <Typography variant="h1">Édition de projet</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Où les idées se transforment et les plans prennent vie !
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
}
