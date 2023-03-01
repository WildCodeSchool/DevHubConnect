import React from "react";
import CardMedia from "@mui/material/CardMedia";

function PortofolioCardImage() {
  return (
    <div>
      <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        image="https://picsum.photos/500/300"
      />
    </div>
  );
}

export default PortofolioCardImage;
