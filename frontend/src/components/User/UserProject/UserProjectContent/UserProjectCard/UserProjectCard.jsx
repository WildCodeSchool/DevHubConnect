/* eslint-disable import/no-duplicates */
import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Chip } from "@mui/material";
import PropTypes from "prop-types";

export default function UserProjectCard({ projectName, projectDescription }) {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", mb: 4 }}>
      <CardMedia
        component="img"
        // alt= {}
        height="200"
        image="https://picsum.photos/300/200"
      />
      <CardContent color="primary" sx={{ width: 250 }}>
        <Typography gutterBottom variant="h5" component="div" mb={2}>
          {projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {projectDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Chip
          label="Voir le descriptif"
          size="medium"
          color="primary"
          sx={{ ml: "auto" }}
        />
      </CardActions>
    </Card>
  );
}

UserProjectCard.propTypes = {
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
};

UserProjectCard.defaultProps = {
  projectName: "",
  projectDescription: "",
};
