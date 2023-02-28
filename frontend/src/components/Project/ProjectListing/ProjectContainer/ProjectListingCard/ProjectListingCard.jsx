import * as React from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "mui-image";
import { Link, Chip } from "@mui/material";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

export default function ProjectListingCard() {
  return (
    <Link href="/project/1" underline="none">
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ sm: 1, md: 2 }}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Paper elevation={3} p={2}>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{ xs: 1, sm: 1, md: 2 }}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Image
              alt="projet"
              src="https://picsum.photos/500/300"
              width={500}
              height="43vh"
            />

            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              spacing={{ xs: 1, sm: 1, md: 2 }}
              justifyContent="flex-start"
              alignItems="center"
              p={2}
            >
              <Typography gutterBottom variant="h3" component="div">
                Project
              </Typography>
              <Typography variant="body2" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi cum dolores accusantium quod aut distinctio fuga
                ducimus a ab rerum molestiae, id, adipisci, numquam laboriosam
                saepe ullam. Impedit, quis! Hic aliquid ullam vero ab commodi,
                iure tenetur odit aut aperiam voluptatum esse minima minus ipsum
                quia a iste nisi impedit.
              </Typography>

              <Typography variant="body2" gutterBottom>
                <Stack direction="row" spacing={2} p={3}>
                  <Chip label="Html" size="small" color="primary" />
                  <Chip label="React" size="small" color="primary" />
                  <Chip label="Javascript" size="small" color="primary" />
                  <Chip label="Css" size="small" color="primary" />
                </Stack>
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row", md: "column" }}
              spacing={{ sm: 1, md: 2 }}
              justifyContent="flex-start"
              alignItems="flex-start"
              p={2}
            >
              <Avatar
                src="https://xsgames.co/randomusers/avatar.php?g=male"
                sx={{ width: 90, height: 90 }}
                alt="Pierre Perrin"
              />

              <Typography variant="h6" gutterBottom>
                Pierre Perrin
              </Typography>
              <Typography variant="h6" gutterBottom>
                Chef de projets
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </Link>
  );
}
