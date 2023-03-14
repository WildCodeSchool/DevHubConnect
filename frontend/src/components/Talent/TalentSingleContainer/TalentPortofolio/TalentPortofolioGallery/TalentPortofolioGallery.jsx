import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function TalentPortofolioGallery() {
  return (
    <Card sx={{ maxWidth: 215 }}>
      <CardMedia
        component="img"
        // alt= {}
        height="150"
        image="https://picsum.photos/300/200"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          NOM{/* projectName */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* projectDescription */}
          description
        </Typography>
        <Typography>
          <a href="/project/:id">en savoir plus</a>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TalentPortofolioGallery;
