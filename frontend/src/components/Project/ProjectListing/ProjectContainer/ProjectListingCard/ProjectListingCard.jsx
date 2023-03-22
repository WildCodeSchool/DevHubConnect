import * as React from "react";
import Image from "mui-image";
import {
  Box,
  Link,
  Chip,
  Stack,
  Avatar,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import PropTypes from "prop-types";
import { format } from "date-fns";

export default function ProjectListingCard({
  projectName,
  projectAbout,
  projectImage,
  id,
  skillName,
  projectStartDate,
  projectEndDate,
  regionName,
  userImage,
}) {
  const formattedStartDate = format(new Date(projectStartDate), "dd/MM/yyyy");
  const formattedEndDate = format(new Date(projectEndDate), "dd/MM/yyyy");
  return (
    <Link href={`/project/${id}`} underline="none">
      <Paper elevation={3} p={2}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Image
              src={`../../../../../../src/assets/projects-img/${projectImage}`}
              width={{ sm: "100%", md: "160" }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ width: "100% " }}>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                justifyContent="flex-start"
                alignItems="space-between"
              >
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
                    {projectAbout}
                  </Typography>

                  <Typography variant="body1">
                    Du {formattedStartDate} au {formattedEndDate}, secteur{" "}
                    {regionName}
                  </Typography>
                  <Typography variant="body1" gutterBottom component="div">
                    <Stack direction="row" spacing={2}>
                      {skillName.map((skill) => {
                        return <Chip label={skill} key={skill} size="small" />;
                      })}
                    </Stack>
                  </Typography>
                </Stack>

                <Avatar
                  src={`../../../../../../src/assets/user-img/${userImage}`}
                  sx={{ width: 90, height: 90, m: 2 }}
                  alt=""
                />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
}

ProjectListingCard.propTypes = {
  projectName: PropTypes.string,
  projectAbout: PropTypes.string,
  projectImage: PropTypes.string,
  id: PropTypes.number,
  skillName: PropTypes.arrayOf(PropTypes.string),
  projectStartDate: PropTypes.string,
  projectEndDate: PropTypes.string,
  regionName: PropTypes.arrayOf(PropTypes.string),
  userImage: PropTypes.string,
};

ProjectListingCard.defaultProps = {
  projectName: "",
  projectAbout: "",
  projectImage: "",
  id: "",
  skillName: [],
  projectStartDate: "",
  projectEndDate: "",
  regionName: [],
  userImage: "",
};
