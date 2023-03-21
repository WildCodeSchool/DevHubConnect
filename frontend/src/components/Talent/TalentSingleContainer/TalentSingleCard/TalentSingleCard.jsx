import React from "react";
// importe la bibliothèque React
// importe de la bibliothèque MUI:
import Avatar from "@mui/material/Avatar";
// un composant Avatar qui permet d'afficher une image circulaire pour représenter un utilisateur
import Stack from "@mui/material/Stack";
// un composant Stack qui permet de créer un groupe d'éléments empilés les uns sur les autres
import Paper from "@mui/material/Paper";
// un composant Paper qui permet de créer un bloc rectangulaire avec des ombres
import Typography from "@mui/material/Typography";
// un composant Typography qui permet d'afficher du texte avec différentes tailles, couleurs et styles
import Box from "@mui/material/Box";
// un composant Box qui permet de créer une boîte rectangulaire avec une bordure et une couleur de fond
import PropTypes from "prop-types";
// importe la bibliothèque PropTypes qui permet de définir les types de données attendus pour les propriétés d'un composant

function TalentSingleCard({ avatar, firstName, lastName, bio, job }) {
  // définit les propriétés du talent qui seront affichées dans sa carte
  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        elevation={2}
        sx={{
          color: "UserDashboardCard.color",
          backgroundColor: "UserDashboardCard.Background",
          "&:hover": {
            backgroundColor: "UserDashboardCard.Bghover",
          },
        }}
      >
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ sm: 1, md: 2 }}
          justifyContent="flex-start"
          alignItems="center"
          p={2}
        >
          <Avatar
            alt={firstName}
            src={avatar} // Affiche l'image du talent visé
            sx={{
              width: 100,
              height: 100,
              border: 4,
              borderColor: "primary.main",
            }}
          />
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={0.5}
            sx={{ width: "100%" }}
          >
            <Typography
              component="div"
              variant="body1"
              sx={{
                color: "UserDashboardCard.color",
              }}
            >
              {job} {/* Affiche le métier du talent visé */}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={0.5}
            >
              <Typography
                component="div"
                variant="h2"
                sx={{
                  color: "UserDashboardCard.color",
                }}
              >
                {firstName} {lastName}{" "}
                {/* Affiche les prénom et nom du talent visé */}
              </Typography>
            </Stack>
            <Typography variant="body1" gutterBottom fullWidth>
              {bio} {/* Affiche la bio du talent visé */}
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}

// définit les types de données attendues pour chaque propriété du composant
TalentSingleCard.propTypes = {
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  bio: PropTypes.string,
  job: PropTypes.string,
};

// définit les valeurs par défaut de chaque propriété du composant
TalentSingleCard.defaultProps = {
  avatar: "",
  firstName: "",
  lastName: "",
  bio: "",
  job: "",
};

export default TalentSingleCard;
