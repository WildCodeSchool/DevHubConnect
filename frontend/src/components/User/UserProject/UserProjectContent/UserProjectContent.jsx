// Importations

import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import UserProjectCurrent from "./UserProjectCurrent/UserProjectCurrent";
import UserProjectUpComing from "./UserProjectUpComing/UserProjectUpComing";
import UserProjectNotSelected from "./UserProjectNotSelected/UserProjectNotSelected";
import UserProjectAll from "./UserProjectAll/UserProjectAll";

// Composant représentant le contenu des projets utilisateur

function UserProjectContent() {
  // État pour savoir si les projets actuels sont développés ou non
  const [currentProjectsExpanded, setCurrentProjectsExpanded] = useState(true);
  const [upcomingProjectsExpanded, setUpcomingProjectsExpanded] =
    useState(false);
  const [notselectedProjectsExpanded, setNotselectedProjectsExpanded] =
    useState(false);
  const [allProjectsExpanded, setAllProjectsExpanded] = useState(false);

  // Gère le clic sur les boutons représentant les différents types de projets
  const handleProjectsClick = (type) => {
    switch (type) {
      case "current":
        // Développe les projets actuels et réduit les autres
        setCurrentProjectsExpanded(!currentProjectsExpanded);
        setUpcomingProjectsExpanded(false);
        setNotselectedProjectsExpanded(false);
        setAllProjectsExpanded(false);
        break;
      case "upcoming":
        // Développe les projets à venir et réduit les autres
        setCurrentProjectsExpanded(false);
        setUpcomingProjectsExpanded(!upcomingProjectsExpanded);
        setNotselectedProjectsExpanded(false);
        setAllProjectsExpanded(false);
        break;
      case "notselected":
        // Développe les projets non sélectionnés et réduit les autres
        setCurrentProjectsExpanded(false);
        setUpcomingProjectsExpanded(false);
        setNotselectedProjectsExpanded(!notselectedProjectsExpanded);
        setAllProjectsExpanded(false);
        break;
      case "all":
        // Développe tous les projets et réduit les autres
        setCurrentProjectsExpanded(false);
        setUpcomingProjectsExpanded(false);
        setNotselectedProjectsExpanded(false);
        setAllProjectsExpanded(!allProjectsExpanded);
        break;
      default:
        // Réduit tous les projets
        setCurrentProjectsExpanded(false);
        setUpcomingProjectsExpanded(false);
        setNotselectedProjectsExpanded(false);
        setAllProjectsExpanded(false);
        break;
    }
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      {/* La propriété flexGrow permet à l'élément d'occuper tout l'espace disponible dans son container parent. 
      La propriété padding ajoute un espace de 3 unités autour de l'élément. */}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={4} p={2}>
        {/* La direction définit le sens dans lequel les éléments seront empilés dans le Stack. 
        Pour les petits écrans (xs), ils seront empilés verticalement (column) et pour les plus grands écrans (sm), 
        ils seront empilés horizontalement (row). La propriété spacing ajoute un espacement de 4 unités entre les éléments 
        du Stack et la propriété p ajoute un espace de 2 unités autour de l'élément. */}
        <Button
          variant="outlined"
          size="small"
          href="#InProgress"
          sx={{
            backgroundColor: currentProjectsExpanded ? "#1C2536" : "",
          }}
          onClick={() => handleProjectsClick("current")}
        >
          Projets en cours
        </Button>
        {/* Le bouton a une variante "outlined" et une taille "small". Le lien est défini par la propriété href="#InProgress". 
        La propriété sx permet de définir un style personnalisé pour le bouton. Si currentProjectsExpanded est vrai, 
        alors le fond sera de couleur "#1C2536", sinon il sera transparent. Lorsque le bouton est cliqué, la fonction 
        handleProjectsClick est appelée avec l'argument "current". */}
        <Button
          variant="outlined"
          size="small"
          href="#Pending"
          sx={{
            backgroundColor: upcomingProjectsExpanded ? "#1C2536" : "",
          }}
          onClick={() => handleProjectsClick("upcoming")}
        >
          Projets à venir
        </Button>
        <Button
          variant="outlined"
          size="small"
          href="#Abandoned"
          sx={{
            backgroundColor: notselectedProjectsExpanded ? "#1C2536" : "",
          }}
          onClick={() => handleProjectsClick("notselected")}
        >
          Projets non retenus
        </Button>
        <Button
          variant="outlined"
          size="small"
          href="#All"
          sx={{
            backgroundColor: allProjectsExpanded ? "#1C2536" : "",
          }}
          onClick={() => handleProjectsClick("all")}
        >
          Tous les projets
        </Button>
      </Stack>
      <Stack>
        {/* Ce composant représente les projets en cours */}
        <UserProjectCurrent
          // L'état 'expanded' indique si les projets en cours sont développés ou non
          expanded={currentProjectsExpanded}
          // La fonction 'onClick' permet de gérer l'événement click sur les projets en cours
          onClick={() => handleProjectsClick("current")}
        />

        <UserProjectUpComing
          expanded={upcomingProjectsExpanded}
          onClick={() => handleProjectsClick("upcoming")}
        />
        <UserProjectNotSelected
          expanded={notselectedProjectsExpanded}
          onClick={() => handleProjectsClick("notselected")}
        />
        <UserProjectAll
          expanded={allProjectsExpanded}
          onClick={() => handleProjectsClick("all")}
        />
      </Stack>
    </Box>
  );
}

// export default
export default UserProjectContent;
