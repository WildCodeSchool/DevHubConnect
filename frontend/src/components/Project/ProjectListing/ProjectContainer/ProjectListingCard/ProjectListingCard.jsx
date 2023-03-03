import * as React from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "mui-image";
import { Link, Chip } from "@mui/material";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";

export default function ProjectListingCard({
  projectName,
  projectDescription,
  firstname,
  lastname,
  jobId,
  id,
}) {
  return (
    <Link href={`/project/${id}`} underline="none">
      <Paper elevation={3} p={2}>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="space-between"
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            justifyContent="flex-start"
            alignItems="space-between"
          >
            <Image
              sx={{ minHeight: 122, maxWidth: 300 }}
              src="https://picsum.photos/300/200"
            />
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "column", md: "column" }}
            spacing={{ xs: 1, sm: 1, md: 2 }}
            justifyContent="flex-start"
            alignItems="flex-start"
            p={2}
          >
            <Typography gutterBottom variant="h3" component="div">
              {projectName}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {projectDescription}
            </Typography>

            <Typography variant="body2" gutterBottom>
              <Stack direction="row" spacing={2} marginTop={2}>
                <Chip label="Html" size="small" color="primary" />
                <Chip label="React" size="small" color="primary" />
                <Chip label="Javascript" size="small" color="primary" />
                <Chip label="Css" size="small" color="primary" />
              </Stack>
            </Typography>
          </Stack>

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
              alt=""
            />

            <Typography variant="body1" gutterBottom>
              {firstname} {lastname}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {jobId}
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Link>
  );
}
ProjectListingCard.propTypes = {
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  jobId: PropTypes.string,
  id: PropTypes.number,
};

ProjectListingCard.defaultProps = {
  projectName: "",
  projectDescription: "",
  firstname: "",
  lastname: "",
  jobId: "",
  id: 0,
};
