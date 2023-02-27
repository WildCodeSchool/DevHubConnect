import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";

export default function ProjectSingleDescriptionContent() {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row" }}
      spacing={{ sm: 1, md: 2 }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Paper
        elevation={3}
        sx={{
          flexGrow: 1,
          borderRadius: 2,
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "column", md: "column" }}
          spacing={{ sm: 1, md: 2 }}
          justifyContent="space-between"
          alignItems="center"
          p={2}
        >
          <item>
            <Typography variant="h3" gutterBottom>
              Project Detail
            </Typography>

            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Quos blanditiis
              tenetur unde suscipit, quam beatae rerum inventore consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat
              deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Du 01/06/2023 au 31/12/2023
            </Typography>
          </item>
        </Stack>
      </Paper>

      <Paper
        elevation={3}
        p={2}
        sx={{
          flexGrow: 1,
          borderRadius: 2,
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "column", md: "column" }}
          spacing={{ xs: 1, sm: 1, md: 2 }}
          justifyContent="space-between"
          alignItems="center"
          p={2}
        >
          <Avatar
            src="https://xsgames.co/randomusers/avatar.php?g=male"
            sx={{ width: 90, height: 90 }}
            alt="Pierre Perrin"
          />
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row", md: "row" }}
          spacing={{ xs: 1, sm: 1, md: 2 }}
          justifyContent="flex-start"
          alignItems="center"
          p={2}
        >
          <item>
            <Typography variant="h6" gutterBottom>
              Pierre Perrin
            </Typography>
            <Typography variant="h6" gutterBottom>
              Chef de projets
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </item>
        </Stack>
      </Paper>
      <Stack
        direction={{ xs: "column", sm: "column", md: "column" }}
        spacing={{ xs: 1, sm: 1, md: 2 }}
        justifyContent="flex-start"
        alignItems="center"
        p={2}
      >
        <Paper>
          <item>
            <Typography variant="h3" gutterBottom p={2}>
              Skills
            </Typography>
            <Typography variant="body2" gutterBottom>
              <Stack direction="row" spacing={2} p={3}>
                <Chip label="Html" size="small" color="primary" />
                <Chip label="React" size="small" color="primary" />
                <Chip label="Javascript" size="small" color="primary" />
                <Chip label="Css" size="small" color="primary" />
              </Stack>
            </Typography>
          </item>
        </Paper>
        <Paper
          elevation={3}
          p={2}
          sx={{
            flexGrow: 1,
            borderRadius: 2,
          }}
        >
          {/* <item
          
            sx={{
              height: "100%",
              width: "100%",
            }}
          > */}
          <img alt="projet" src="https://picsum.photos/300/200" />
          {/* </item> */}
        </Paper>
      </Stack>
    </Stack>
  );
}
