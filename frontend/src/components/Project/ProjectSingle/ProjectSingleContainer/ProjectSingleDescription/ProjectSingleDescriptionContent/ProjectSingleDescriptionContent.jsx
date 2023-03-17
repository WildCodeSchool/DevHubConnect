import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import PropTypes from "prop-types";
import { format } from "date-fns";

export default function ProjectSingleDescriptionContent({
  projectName,
  projectDescription,
  creatorName,
  creatorBiography,
  creatorAbout,
  creatorEmail,
  creatorJob,
  skillName,
  projectStartDate,
  projectEndDate,
  regionName,
}) {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row" }}
      spacing={{ sm: 1, md: 2 }}
      sx={{ mt: 1, mb: 1 }}
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Paper
        elevation={8}
        sx={{
          flexGrow: 1,
          borderRadius: 4,
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "column", md: "column" }}
          spacing={{ sm: 1, md: 2 }}
          justifyContent="flex-start"
          alignItems="center"
          p={2}
        >
          <Typography variant="h3" gutterBottom>
            {projectName}
          </Typography>

          <Typography variant="body1" gutterBottom>
            {projectDescription}
            <Typography variant="body1" gutterBottom>
              Du{" "}
              {projectStartDate?.length > 0
                ? format(new Date(projectStartDate), "dd/MM/yyyy")
                : ""}{" "}
              au{" "}
              {projectEndDate?.length > 0
                ? format(new Date(projectEndDate), "dd/MM/yyyy")
                : ""}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {regionName}
            </Typography>
          </Typography>
        </Stack>
      </Paper>

      <Paper
        elevation={3}
        sx={{
          flexGrow: 1,
          borderRadius: 2,
          mt: 1,
          mb: 1,
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "column", md: "column" }}
          spacing={{ xs: 1, sm: 1, md: 2 }}
          justifyContent="flex-start"
          alignItems="center"
          p={2}
        >
          <Avatar
            src="https://xsgames.co/randomusers/avatar.php?g=male"
            sx={{ width: 90, height: 90 }}
            alt=""
          />
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "column", md: "column" }}
          spacing={{ xs: 1, sm: 1, md: 2 }}
          justifyContent="flex-start"
          alignItems="center"
          p={2}
        >
          <Typography variant="body1" gutterBottom>
            {creatorJob}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {creatorName}
          </Typography>

          <Typography paragraph>{creatorBiography}</Typography>
          <Typography variant="body2" color="text.secondary">
            {creatorAbout}
          </Typography>
          <Typography variant="body1" gutterBottom>
            📧 {creatorEmail}
          </Typography>
        </Stack>
      </Paper>

      <Stack
        direction={{ xs: "column", sm: "column", md: "column" }}
        spacing={{ xs: 1, sm: 1, md: 2 }}
        justifyContent="flex-start"
        alignItems="center"
        p={2}
      >
        <Paper
          elevation={3}
          sx={{
            flexGrow: 1,
            borderRadius: 2,
          }}
        >
          <Typography variant="h3" gutterBottom p={2}>
            Skills
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Stack direction="row" spacing={2} p={1}>
              {skillName.map((skill, index) => {
                return (
                  <Chip
                    label={skill}
                    index={index}
                    size="small"
                    color="primary"
                  />
                );
              })}
            </Stack>
          </Typography>
        </Paper>

        {/* <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ xs: 1, sm: 1, md: 2 }}
        justifyContent="flex-start"
        alignItems="center"
      > */}
        <Paper
          elevation={3}
          p={2}
          sx={{
            flexGrow: 1,
            borderRadius: 2,
          }}
        >
          <image>
            <img alt="projet" src="https://picsum.photos/300/200" />
          </image>
        </Paper>
      </Stack>
    </Stack>
    //  </Stack>
  );
}
ProjectSingleDescriptionContent.propTypes = {
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  creatorName: PropTypes.string,
  creatorBiography: PropTypes.string,
  creatorAbout: PropTypes.string,
  creatorEmail: PropTypes.string,
  creatorJob: PropTypes.string,
  skillName: PropTypes.string,
  projectStartDate: PropTypes.instanceOf(Date),
  projectEndDate: PropTypes.instanceOf(Date),
  regionName: PropTypes.string,
};

ProjectSingleDescriptionContent.defaultProps = {
  projectName: "",
  projectDescription: "",
  creatorName: "",
  creatorBiography: "",
  creatorAbout: "",
  creatorEmail: "",
  creatorJob: "",
  skillName: "",
  projectStartDate: [],
  projectEndDate: [],
  regionName: "",
};
