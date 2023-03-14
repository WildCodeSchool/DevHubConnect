import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import PropTypes from "prop-types";
//  import { format } from "date-fns";

export default function ProjectSingleDescriptionContent({
  projectName,
  projectDescription,
  firstname,
  lastname,
  jobId,
  skillName,
  projectStartDate,
  projectEndDate,
  regionName,
}) {
  //  const formattedStartDate = format(new Date(projectStartDate), "dd/MM/yyyy");
  //  const formattedEndDate = format(new Date(projectEndDate), "dd/MM/yyyy");

  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row" }}
      spacing={{ sm: 1, md: 2 }}
      sx={{ mt: 1, mb: 1 }}
      justifyContent="flex-start"
      alignItems="flex-start"
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
              Du {projectStartDate} au {projectEndDate}
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
            alt="Pierre Perrin"
          />
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "column", md: "column" }}
          spacing={{ xs: 1, sm: 1, md: 2 }}
          justifyContent="space-between"
          alignItems="center"
          p={2}
        >
          <Typography variant="body1" gutterBottom>
            {firstname} {lastname}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {jobId}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Stack>
      </Paper>

      <Stack
        direction={{ xs: "column", sm: "column", md: "column" }}
        // display="flex"
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
          <Typography variant="body2" gutterBottom>
            <Stack direction="row" spacing={2} p={2}>
              <Chip label={skillName} size="small" color="primary" />
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
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  jobId: PropTypes.string,
  skillName: PropTypes.string,
  projectStartDate: PropTypes.instanceOf(Date),
  projectEndDate: PropTypes.instanceOf(Date),
  regionName: PropTypes.string,
};

ProjectSingleDescriptionContent.defaultProps = {
  projectName: "",
  projectDescription: "",
  firstname: "",
  lastname: "",
  jobId: "",
  skillName: "",
  projectStartDate: [],
  projectEndDate: [],
  regionName: "",
};
