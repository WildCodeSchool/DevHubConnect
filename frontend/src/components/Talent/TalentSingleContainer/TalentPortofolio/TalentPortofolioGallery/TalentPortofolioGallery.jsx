import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Stack,
  CardMedia,
  CardContent,
  Card,
  Typography,
  Link,
  CardActions,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

function TalentPortofolioGallery({ id }) {
  // State pour stocker la liste de projets
  const [projectList, setProjectList] = useState([]);
  // State pour stocker la liste de candidatures
  const [candidacy, setCandidacy] = useState([]);

  // Récupération du token stocké dans localStorage
  const token = localStorage.getItem("token");

  // Fonction pour récupérer la liste des projets
  const getProjectList = () => {
    axios
      .get("http://localhost:5007/projects", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((projectsData) => {
        // Stockage de la liste des projets dans le state projectList
        setProjectList(projectsData);
      });
  };

  // Fonction pour récupérer la liste des candidatures
  const getCandidacy = () => {
    axios
      .get("http://localhost:5007/candidacies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((candidaciesData) => {
        // Stockage de la liste des candidatures dans le state candidacy
        setCandidacy(candidaciesData);
      });
  };

  // Utilisation de useEffect pour exécuter les fonctions de récupération de données une seule fois, après le premier rendu
  useEffect(() => {
    getProjectList();
    getCandidacy();
  }, []);

  // Filtrage des candidatures par user_id, puis
  const projects = candidacy
    .filter((apply) => apply.user_id === id)
    // mapping de chaque candidature pour récupérer les informations sur les projets
    .map((List) => {
      const item = projectList.find(
        (project) => project.id === List.project_id
      );
      // Renvoie un objet avec les informations sur le projet, ou une chaîne vide s'il n'y a pas de projet correspondant
      return item
        ? {
            id: item.id,
            projectName: item.project_name,
            about: item.project_about,
            image: item.project_image,
          }
        : "";
    });

  // Affichage des projets sous forme de cartes
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
      alignItems="flex-start"
      mt="2"
      sx={{ flexWrap: "wrap", gap: 2 }}
    >
      {/* mapping de chaque projet pour créer une carte */}
      {projects.map((project, index) => {
        return (
          <Card sx={{ maxWidth: "30%" }} index={index}>
            {/* lien vers la page dédiée à chaque projet */}
            <Link href={`/project/:${project.id}`} underline="none">
              {/* Affichage de l'image du projet */}
              <CardMedia
                component="img"
                // alt= {}
                height="150"
                // Utilisation de l'image stockée dans le dossier src/assets/projects-img/
                image={`../../../../../src/assets/projects-img/${project.image}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.projectName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.about}
                  description
                </Typography>
              </CardContent>
              {/* Affichage du bouton "Plus" pour accéder à la page du projet */}
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={`/project/${project.id}`}
                >
                  Plus
                </Button>
              </CardActions>
            </Link>
          </Card>
        );
      })}
    </Stack>
  );
}

TalentPortofolioGallery.propTypes = {
  id: PropTypes.number,
};

TalentPortofolioGallery.defaultProps = {
  id: "",
};

export default TalentPortofolioGallery;
