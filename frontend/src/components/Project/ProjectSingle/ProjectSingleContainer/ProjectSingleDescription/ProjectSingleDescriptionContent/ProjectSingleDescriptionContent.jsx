import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";

export default function ProjectSingleDescriptionContent() {
  return (
    <Paper>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        p={2}
      >
        <item>
          <Typography variant="h2" gutterBottom>
            Project Detail
          </Typography>
        </item>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
          suscipit, quam beatae rerum inventore consectetur, neque doloribus,
          cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi
          quidem quibusdam.
        </Typography>

        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0.5}
        >
          <Avatar
            src="https://xsgames.co/randomusers/avatar.php?g=male"
            sx={{ width: 90, height: 90 }}
            alt="Pierre Perrin"
          />

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
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={0.5}
          >
            <item>
              <Typography variant="h6" gutterBottom>
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
            <item
            //   sx={{
            //     height: "100%",
            //     width: "100%",
            //   }}
            >
              <img alt="projet" src="https://picsum.photos/320/310" />
            </item>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
