import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

export default function UserProjectCurrentProject() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Projets en cours</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" spacing={2} p={1}>
            <div>
              <Typography>Projet N°235 .</Typography>
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
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                    sx={{ width: 100, height: 100, ml: 10, mt: 2 }}
                  />
                </CardContent>
                <CardActions>
                  <Button size="small">Partager</Button>
                  <Button size="small">+ d'infos</Button>
                </CardActions>
              </Card>
            </div>
            <div>
              <Typography>Projet N°236 .</Typography>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="150"
                  image="https://picsum.photos/500/300"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Projet Boutique en ligne
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                    sx={{ width: 100, height: 100, ml: 10, mt: 2 }}
                  />
                </CardContent>
                <CardActions>
                  <Button size="small">Partager</Button>
                  <Button size="small">+ d'infos</Button>
                </CardActions>
              </Card>
            </div>
            <div>
              <Typography>Projet N°237 .</Typography>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="150"
                  image="https://picsum.photos/500/300"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Projet Creation BDD
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                    sx={{ width: 100, height: 100, ml: 10, mt: 2 }}
                  />
                </CardContent>
                <CardActions>
                  <Button size="small">Partager</Button>
                  <Button size="small">+ d'infos</Button>
                </CardActions>
              </Card>
            </div>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Projets à venir</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" spacing={2} p={1}>
            <div>
              <Typography>Projet N°235 .</Typography>
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
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                    sx={{ width: 100, height: 100, ml: 10, mt: 2 }}
                  />
                </CardContent>
                <CardActions>
                  <Button size="small">Partager</Button>
                  <Button size="small">+ d'infos</Button>
                </CardActions>
              </Card>
            </div>
            <div>
              <Typography>Projet N°236 .</Typography>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="150"
                  image="https://picsum.photos/500/300"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Projet Boutique en ligne
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                    sx={{ width: 100, height: 100, ml: 10, mt: 2 }}
                  />
                </CardContent>
                <CardActions>
                  <Button size="small">Partager</Button>
                  <Button size="small">+ d'infos</Button>
                </CardActions>
              </Card>
            </div>
            <div>
              <Typography>Projet N°237 .</Typography>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="150"
                  image="https://picsum.photos/500/300"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Projet Creation BDD
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                    sx={{ width: 100, height: 100, ml: 10, mt: 2 }}
                  />
                </CardContent>
                <CardActions>
                  <Button size="small">Partager</Button>
                  <Button size="small">+ d'infos</Button>
                </CardActions>
              </Card>
            </div>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Projets non retenus</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" spacing={2} p={1}>
            <div>
              <Typography>Projet N°235 .</Typography>
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
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                    sx={{ width: 100, height: 100, ml: 10, mt: 2 }}
                  />
                </CardContent>
                <CardActions>
                  <Button size="small">Partager</Button>
                  <Button size="small">+ d'infos</Button>
                </CardActions>
              </Card>
            </div>
            <div>
              <Typography>Projet N°236 .</Typography>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="150"
                  image="https://picsum.photos/500/300"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Projet Boutique en ligne
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                    sx={{ width: 100, height: 100, ml: 10, mt: 2 }}
                  />
                </CardContent>
                <CardActions>
                  <Button size="small">Partager</Button>
                  <Button size="small">+ d'infos</Button>
                </CardActions>
              </Card>
            </div>
            <div>
              <Typography>Projet N°237 .</Typography>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="150"
                  image="https://picsum.photos/500/300"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Projet Creation BDD
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                    sx={{ width: 100, height: 100, ml: 10, mt: 2 }}
                  />
                </CardContent>
                <CardActions>
                  <Button size="small">Partager</Button>
                  <Button size="small">+ d'infos</Button>
                </CardActions>
              </Card>
            </div>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Tous les projets</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Retrouvez ici l'ensemble de vos projets.</Typography>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://picsum.photos/500/300"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
