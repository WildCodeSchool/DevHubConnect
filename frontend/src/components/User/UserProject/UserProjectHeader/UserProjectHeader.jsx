import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

function UserProjectHeader() {
  return (
    <Paper elevation={8} sx={{ mb: 2 }}>
      <Box sx={{ width: "100%", background: "#FFF", padding: 3 }}>
        <Stack spacing={2}>
          <Typography variant="h1">Mes projets</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Les projets sur lesquels je travaille actuellement et ceux qui vont
            suivre
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
}

export default UserProjectHeader;
