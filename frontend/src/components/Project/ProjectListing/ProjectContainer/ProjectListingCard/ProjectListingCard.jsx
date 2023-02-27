import * as React from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Chip } from "@mui/material";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

export default function ProjectListingCard() {
  return (
    <ButtonBase>
      <Paper
        elevation={3}
        p={2}
        sx={{
          maxHeight: "100%",
          maxWidth: "100%",
          flexGrow: 1,
          borderRadius: 2,
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={{ xs: 1, sm: 1, md: 2 }}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {/* <item sx={{ height: "100%", width: "100%" }}> */}
          <img alt="projet" src="https://picsum.photos/400/300" />
          {/* </item> */}

          <item direction="column" spacing={2}>
            <Typography gutterBottom variant="h3" component="div">
              Project
            </Typography>
            <Typography variant="body2" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              cum dolores accusantium quod aut distinctio fuga ducimus a ab
              rerum molestiae, id, adipisci, numquam laboriosam saepe ullam.
              Impedit, quis! Hic aliquid ullam vero ab commodi, iure tenetur
              odit aut aperiam voluptatum esse minima minus ipsum quia a iste
              nisi impedit.
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

          <Stack
            direction={{ xs: "row", sm: "row", md: "column" }}
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

            <item>
              <Typography variant="h6" gutterBottom>
                Pierre Perrin
              </Typography>
              <Typography variant="h6" gutterBottom>
                Chef de projets
              </Typography>
            </item>
          </Stack>
        </Stack>
      </Paper>
    </ButtonBase>
  );
}
