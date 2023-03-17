import * as React from "react";
import {
  Chip,
  Box,
  Typography,
  Paper,
  Stack,
  Grid,
  CardMedia,
} from "@mui/material";
import PropTypes from "prop-types";
import UserDashboardUserInfo from "../../../../../User/UserDashboard/UserDashboardContent/UserDashboardUserInfo/UserDashboardUserInfo";

export default function ProjectSingleDescriptionContent({
  projectDescription,
  skillName,
  projectImage,
}) {
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
              {projectDescription}
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
            <UserDashboardUserInfo />
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
              <Chip label={skillName} size="small" />
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
              // alt= {}
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
};

ProjectSingleDescriptionContent.defaultProps = {
  projectDescription: "",
  skillName: "",
  projectImage: "",
};
