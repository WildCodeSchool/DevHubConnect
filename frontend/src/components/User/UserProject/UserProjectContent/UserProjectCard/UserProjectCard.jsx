import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Chip } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function UserProjectCard({ projectName, projectDescription }) {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        ml: 10,
        marginTop: "25px",
        border: 4,
        borderColor: "#0088CD",
        "& a": {
          textDecoration: "none",
        },
      }}
    >
      <CardMedia
        component="img"
        // alt= {}
        height="200"
        image="https://picsum.photos/300/200"
      />
      <CardContent color="primary" sx={{ width: 220 }}>
        <CardActions>
          <Link to="/project/:id">
            <Chip
              label="+ d'infos"
              onClick={handleClick}
              size="medium"
              color="primary"
              sx={{ ml: 23 }}
            />
          </Link>
        </CardActions>
        <Typography gutterBottom variant="h5" component="div" mb={2}>
          {projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {projectDescription}
        </Typography>
      </CardContent>
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
