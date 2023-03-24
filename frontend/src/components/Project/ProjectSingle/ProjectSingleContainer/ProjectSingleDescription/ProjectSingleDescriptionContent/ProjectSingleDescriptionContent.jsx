import * as React from "react";
import {
  Chip,
  Box,
  Typography,
  Paper,
  Stack,
  Grid,
  CardMedia,
  Link,
} from "@mui/material";
import PropTypes from "prop-types";
import UserDashboardUserInfo from "../../../../../User/UserDashboard/UserDashboardContent/UserDashboardUserInfo/UserDashboardUserInfo";

export default function ProjectSingleDescriptionContent({
  projectDescription,
  skillName,
  projectImage,
  creatorId,
}) {
  const lignes = projectDescription.split("\n");

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Paper
            elevation={2}
            sx={{
              color: "UserSetting.color",
              p: 3,
              backgroundColor: "UserSetting.Background",
            }}
          >
            <Typography
              component="div"
              variant="Body2"
              sx={{ pb: 2, textAlign: "center" }}
            >
              DETAIL DU PROJET
            </Typography>
            <Stack
              direction="row"
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
              sx={{
                p: 2,
              }}
              flexWrap="wrap"
            >
              {lignes.map((ligne) => (
                <span key={ligne}>
                  {ligne}
                  <br />
                </span>
              ))}
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              color: "UserSetting.color",
              backgroundColor: "UserSetting.Background",
              mb: 3,
            }}
          >
            <Link
              href={`/talent/${creatorId}`}
              underline="none"
              sx={{ width: 1 }}
            >
              <UserDashboardUserInfo creatorId={creatorId} />
            </Link>
          </Box>
          <Paper
            elevation={2}
            sx={{
              color: "UserSetting.color",
              p: 3,
              backgroundColor: "UserSetting.Background",
              mb: 3,
            }}
          >
            <Typography
              component="div"
              variant="Body2"
              sx={{ pb: 2, textAlign: "center" }}
            >
              COMPETENCES
            </Typography>
            <Stack
              direction="row"
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
              sx={{
                p: 2,
              }}
              flexWrap="wrap"
            >
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
          </Paper>
          <Paper
            elevation={2}
            sx={{
              color: "UserSetting.color",
              backgroundColor: "UserSetting.Background",
            }}
            pb={2}
          >
            <CardMedia
              component="img"
              key={projectImage}
              image={`../../../../../src/assets/projects-img/${projectImage}`}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

ProjectSingleDescriptionContent.propTypes = {
  projectDescription: PropTypes.string,
  skillName: PropTypes.string,
  projectImage: PropTypes.string,
  creatorId: PropTypes.number,
};

ProjectSingleDescriptionContent.defaultProps = {
  projectDescription: "",
  skillName: "",
  projectImage: "",
  creatorId: null,
};
