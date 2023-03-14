import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

export default function SimplePaper() {
  return (
    <Paper elevation={8} sx={{ mb: 2 }}>
      <Box sx={{ width: "100%", background: "#FFF", padding: 3 }}>
        <Stack direction="row" spacing={2}>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h1" gutterBottom>
              h1. Heading
            </Typography>
            <Typography variant="h2" gutterBottom>
              h2. Heading
            </Typography>
            <Typography variant="h3" gutterBottom>
              h3. Heading
            </Typography>
            <Typography variant="h4" gutterBottom>
              h4. Heading
            </Typography>
            <Typography variant="h5" gutterBottom>
              h5. Heading
            </Typography>
            <Typography variant="h6" gutterBottom>
              h6. Heading
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="body2" gutterBottom>
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="button" display="block" gutterBottom>
              button text
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              caption text
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              overline text
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <Stack
                direction={{ sm: "row", md: "column" }}
                spacing={{ sm: 1, md: 1 }}
                justifyContent="flex-start"
                alignItems="flex-start"
                p={2}
                pl={3}
                sx={{
                  borderLeft: 4,
                  borderColor: "UserDashboardCurrentProject.InProgress",
                  backgroundColor: "UserDashboardCurrentProject.background",
                }}
              >
                <Typography variant="h2" gutterBottom>
                  Stack. InProgress
                </Typography>
                <Typography variant="body1" gutterBottom>
                  body2. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
                </Typography>
              </Stack>
              <Stack
                direction={{ sm: "row", md: "column" }}
                spacing={{ sm: 1, md: 1 }}
                justifyContent="flex-start"
                alignItems="flex-start"
                p={2}
                pl={3}
                sx={{
                  borderLeft: 4,
                  borderColor: "UserDashboardCurrentProject.Pending",
                  backgroundColor: "UserDashboardCurrentProject.background",
                }}
              >
                <Typography variant="h2" gutterBottom>
                  Stack. Pending
                </Typography>
                <Typography variant="body1" gutterBottom>
                  body2. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
                </Typography>
              </Stack>
              <Stack
                direction={{ sm: "row", md: "column" }}
                spacing={{ sm: 1, md: 1 }}
                justifyContent="flex-start"
                alignItems="flex-start"
                p={2}
                pl={3}
                sx={{
                  borderLeft: 4,
                  borderColor: "UserDashboardCurrentProject.Paused",
                  backgroundColor: "UserDashboardCurrentProject.background",
                }}
              >
                <Typography variant="h2" gutterBottom>
                  Stack. Paused
                </Typography>
                <Typography variant="body1" gutterBottom>
                  body2. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
                </Typography>
              </Stack>
              <Stack
                direction={{ sm: "row", md: "column" }}
                spacing={{ sm: 1, md: 1 }}
                justifyContent="flex-start"
                alignItems="flex-start"
                p={2}
                pl={3}
                sx={{
                  borderLeft: 4,
                  borderColor: "UserDashboardCurrentProject.Completed",
                  backgroundColor: "UserDashboardCurrentProject.background",
                }}
              >
                <Typography variant="h2" gutterBottom>
                  Stack. Completed
                </Typography>
                <Typography variant="body1" gutterBottom>
                  body2. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
                </Typography>
              </Stack>
              <Stack
                direction={{ sm: "row", md: "column" }}
                spacing={{ sm: 1, md: 1 }}
                justifyContent="flex-start"
                alignItems="flex-start"
                p={2}
                pl={3}
                sx={{
                  borderLeft: 4,
                  borderColor: "UserDashboardCurrentProject.Abandoned",
                  backgroundColor: "UserDashboardCurrentProject.background",
                }}
              >
                <Typography variant="h2" gutterBottom>
                  Stack. Abandoned
                </Typography>
                <Typography variant="body1" gutterBottom>
                  body2. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
}
