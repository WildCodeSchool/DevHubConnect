import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

function TalentSingleCard({ avatar, firstName, lastName, bio, job }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        elevation={2}
        sx={{
          color: "UserDashboardCard.color",
          backgroundColor: "UserDashboardCard.Background",
          "&:hover": {
            backgroundColor: "UserDashboardCard.Bghover",
          },
        }}
      >
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ sm: 1, md: 2 }}
          justifyContent="flex-start"
          alignItems="center"
          p={2}
        >
          <Avatar
            alt="Remy Sharp"
            src={avatar}
            sx={{
              width: 100,
              height: 100,
              border: 4,
              borderColor: "primary.main",
            }}
          />
          <Stack
            direction="column"
            justifyContent={{ xs: "center", sm: "center", md: "flex-start" }}
            alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
            spacing={0.5}
            sx={{ width: "100%" }}
          >
            <Typography
              component="div"
              variant="body1"
              sx={{
                color: "UserDashboardCard.color",
              }}
            >
              {job}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={0.5}
            >
              <Typography
                component="div"
                variant="h2"
                sx={{
                  color: "UserDashboardCard.color",
                }}
              >
                {firstName} {lastName}
              </Typography>
            </Stack>
            <Typography variant="body1" gutterBottom fullWidth>
              {bio}
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}

TalentSingleCard.propTypes = {
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  bio: PropTypes.string,
  job: PropTypes.string,
};

TalentSingleCard.defaultProps = {
  avatar: "",
  firstName: "",
  lastName: "",
  bio: "",
  job: "",
};

export default TalentSingleCard;
