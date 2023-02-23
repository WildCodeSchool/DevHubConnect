import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

function MuiCard() {
  return (
    <div>
      <Card sx={{ maxWidth: 345, bgcolor: "pink" }}>
        <Avatar
          alt="Mark Zuckerberg"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 90, height: 90 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Mark Zuckerberg
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Co-fondateur de Facebook
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default MuiCard;
