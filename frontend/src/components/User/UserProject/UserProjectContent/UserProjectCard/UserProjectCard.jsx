/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
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
    <Card sx={{ maxWidth: 215 }}>
      <CardMedia
        component="img"
        // alt= {}
        height="150"
        image="https://picsum.photos/300/200"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" />
        {projectName}
        <Typography variant="body2" color="text.secondary" />
        {projectDescription}
      </CardContent>
      <CardActions>
        <Chip
          label="Voir le descriptif"
          size="medium"
          color="primary"
          sx={{ ml: 4 }}
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
