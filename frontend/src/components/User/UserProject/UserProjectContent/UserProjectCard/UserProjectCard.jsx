import React from "react";
import { Paper, Chip, Typography, Link, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

export default function UserProjectCard({
  projectId,
  projectName,
  projectDescription,
}) {
  const handleMoreInfoClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Link href={`/project/${projectId}`} underline="none">
      <Paper
        elevation={2}
        sx={{
          color: "UserDashboardCard.color",
          backgroundColor: "UserProjectCard.Background",
          "&:hover": {
            backgroundColor: "UserProjectCard.bghover",
          },
          borderLeft: 6,
          borderColor: "UserProjectCard.Completed",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              sx={{
                pt: 2,
                pl: 2,
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://picsum.photos/200/200"
                sx={{ width: 100, height: 100 }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={9}
              sx={{
                p: 2,
              }}
            >
              <Typography gutterBottom variant="h2">
                {projectName}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {projectDescription}
              </Typography>
              <Chip
                size="small"
                label="+ d'infos"
                onClick={() => handleMoreInfoClick(projectId)}
                color="primary"
                sx={{
                  mt: 2,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Link>
  );
}

UserProjectCard.propTypes = {
  projectId: PropTypes.number,
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
};

UserProjectCard.defaultProps = {
  projectId: "",
  projectName: "",
  projectDescription: "",
};
