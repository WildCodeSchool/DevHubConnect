import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "mui-image";
import { Link, Chip } from "@mui/material";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import { format } from "date-fns";

export default function ProjectListingCard({
  projectName,
  projectDescription,
  firstname,
  lastname,
  jobId,
  id,
  skillName,
  projectStartDate,
  projectEndDate,
  regionName,
}) {
  const formattedStartDate = format(new Date(projectStartDate), "dd/MM/yyyy");
  const formattedEndDate = format(new Date(projectEndDate), "dd/MM/yyyy");
  return (
    <Link href={`/project/${id}`} underline="none">
      <Paper elevation={3} p={2}>
        <Box sx={{ width: "100% " }}>
          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={{ sm: 1, md: 2 }}
            justifyContent="space-between"
            alignItems="center"
            sx={{
              width: "100%",
            }}
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

              <Typography component="div" variant="body1">
                Du {formattedStartDate} au {formattedEndDate}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {regionName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <Stack direction="row" spacing={2}>
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
        </Box>
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
  skillName: PropTypes.string,
  projectStartDate: PropTypes.instanceOf(Date),
  projectEndDate: PropTypes.instanceOf(Date),
  regionName: PropTypes.string,
};

ProjectListingCard.defaultProps = {
  projectName: "",
  projectDescription: "",
  firstname: "",
  lastname: "",
  jobId: "",
  id: "",
  skillName: "",
  projectStartDate: [],
  projectEndDate: [],
  regionName: "",
};
