import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import TalentSingleHeader from "./TalentSingleHeader/TalentSingleHeader";
import TalentSingleSkills from "./TalentSingleSkills/TalentSingleSkills";
import TalentAbout from "./TalentAbout/TalentAbout";
import TalentPortofolio from "./TalentPortofolio/TalentPortofolio";
import TalentSingleCard from "./TalentSingleCard/TalentSingleCard";

function TalentSingleContainer() {
  // useState initialise la variable "user" avec valeur vide / fonction setUser met à jour la variable user au cours de l'exécution du programme
  const [user, setUser] = useState({});
  // Initialise un état "job" vide à l'aide du hook useState
  const [job, setJob] = useState([]);
  // Initialise un état "region" vide à l'aide du hook useState
  const [region, setRegion] = useState([]);

  // Récupère l'ID du talent présent ds l'URL grâce au hook useParams
  const { id } = useParams();

  // Récupère le token d'authentification du talent à partir du local storage
  // utilisé pour autoriser les requêtes API effectuées ds fonction getUser, getJobs, getRegions
  const token = localStorage.getItem("token");

  // Fonction pour récupérer les données du talent
  const getUser = () => {
    axios
      .get(`http://localhost:5007/users/${id}`, {
        // par la requête http GET à l'API sur un talent spécifique ${id}
        headers: { Authorization: `Bearer ${token}` },
        // requête envoyée avec un header contenant token JWT d'authentification
      })
      .then((response) => response.data)
      .then((userData) => {
        setUser(userData);
      })
      // si la requête est réussie les données sont exploitées ds l'état 'user' grâce à la fonction setUser
      .catch((error) => {
        console.error(error);
      });
    // sinon une erreur est affichée ds la console
  };

  // Fonction pour obtenir les noms de tous les emplois
  const getJobs = () => {
    axios
      .get("http://localhost:5007/jobs", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((jobData) => {
        setJob(jobData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Fonction pour obtenir les noms de toutes les régions
  const getRegions = () => {
    axios
      .get("http://localhost:5007/regions", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((regionData) => {
        setRegion(regionData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // lorsque le composant est monté
  // Récupère et définit les données nécessaires ds l'état du composant en appellant les fonctions get
  useEffect(() => {
    getUser();
    getJobs();
    getRegions();
  }, []);

  // Rendu du composant
  return (
    <Box>
      {/* Affiche le header du talent avec les informations récupérées au-dessus */}
      <TalentSingleHeader
        job={job.find((j) => j.id === user.job_id)?.job_name}
        // .find va chercher ds le tableau job le nom du job qui répond à la condition de la fonction fléchée
        // à chque job de la liste (j) si l'id du job correspond à l'id du job du user
        // alors on récupère le nom du job du user
        // on le passe en propriété pour l'afficher
        region={region.find((r) => r.id === user.region_id)?.region_name}
        // idem region
        mail={user.email}
        firstName={user.firstname}
      />

      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid container spacing={3}>
          {/* Affiche la carte de profil du talent */}
          <Grid item xs={12} md={6}>
            <TalentSingleCard
              avatar={user.user_image} // Affiche l'image du talent visé
              firstName={user.firstname} // Affiche le prénom du talent visé
              lastName={user.lastname} // Affiche le nom de famille du talent visé
              bio={user.biography} // Affiche la biographie du talent visé
              job={job.find((j) => j.id === user.job_id)?.job_name} // Affiche le nom du poste du talent visé
            />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Affiche les compétences du talent visé */}
            <TalentSingleSkills id={user.id} />{" "}
          </Grid>
        </Grid>
        <Container sx={{ width: "100%", p: 5, textAlign: "center" }}>
          {/* Affiche les informations sur le talent visé */}
          <TalentAbout about={user.about} />{" "}
        </Container>
        <TalentPortofolio id={user.id} />
      </Box>
    </Box>
  );
}

export default TalentSingleContainer;
