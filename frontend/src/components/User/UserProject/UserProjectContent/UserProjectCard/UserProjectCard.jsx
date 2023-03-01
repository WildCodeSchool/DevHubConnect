import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import { Chip } from "@mui/material";

function UserProjectCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        image="https://picsum.photos/500/300"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Projet Application web
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Avatar
          alt="Remy Sharp"
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

export default UserProjectCard;
