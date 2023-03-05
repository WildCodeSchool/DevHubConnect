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
import Avatar from "@mui/material/Avatar";
import { Chip } from "@mui/material";
import PropTypes from "prop-types";

export default function UserProjectCard({
  projectName,
  projectDescription,
  firstName,
  lastName,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        // alt={}
        height="150"
        image="https://picsum.photos/300/200"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" />
        {projectName}
        <Typography variant="body2" color="text.secondary" />
        {projectDescription}
        <Avatar
          alt={{ firstName, lastName }}
          src="https://xsgames.co/randomusers/avatar.php?g=male"
          sx={{ width: 100, height: 100, ml: 10, mt: 2 }}
        />
      </CardContent>
      <CardActions>
        <Chip label="Partager" size="medium" color="primary" sx={{ ml: 8 }} />
        <Chip label="+ d'infos" size="medium" color="primary" />
      </CardActions>
    </Card>
  );
}

UserProjectCard.propTypes = {
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

UserProjectCard.defaultProps = {
  projectName: "",
  projectDescription: "",
  firstName: "",
  lastName: "",
};
