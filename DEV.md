# GuidLine DevhubConnect

## Utilisation du theme

Les pages doivent faire appel a un composant général qui fera lui meme appel a 2 composents :

--- Page
|**\_ Exemple.jsx
|** Components
|** ExempleHeader.jsx
|** ExempleContent.jsx
|_ autres composents
|_ ...

### Exemple HEADER

`
import \* as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

<Paper elevation={8} sx={{ mb: 2 }}>
<Box sx={{ width: "100%", background: "#FFF", padding: 3 }}>
<Stack spacing={2} sx={{ mb: 2 }}>
<Typography variant="h1">Tableau de bord</Typography>
<Typography variant="subtitle1" gutterBottom>
Gérez vos projets en un seul endroit : votre dashboard personnel
</Typography>
</Stack>
</Box>
</Paper>`

### Exemple CONTENT

`
import Box from "@mui/material/Box";
import Box from "@mui/material/Box";
export default function UserDashboardContent() {
return (
<Box sx={{ flexGrow: 1, padding: 3 }}>

        //Votre code ici

    </Box>`

## API avec Token

`const getProjects = () => {

    const token = localStorage.getItem("token");

    axios
        .get("http://localhost:5007/projects", {            // adresse locale http://localhost et pas une IP
            headers: { Authorization: `Bearer ${token}` },  // Obligatoire pour le Token
        })
        .then((response) => response.data)
        .then((projectsData) => {
            setProjectListing(projectsData);
        });
      };
      // etc ...`

ou :
`
const token = localStorage.getItem("token");

useEffect(() => {
    async function fetchDataAbout() {
        try {
        const response = await axios.get(
            `http://localhost:5007/users/${userId}`, 
            { headers: { Authorization: `Bearer ${token}`} }
        );
        setUser(response.data);
        } catch (error) {
        console.error(error);
        setUser(null);
        }
    }
    fetchDataAbout();
}, [userId, token]);`

## Récupération de l'ID

`const userId = parseInt(localStorage.getItem("userId"), 10);`

## Fichier .env Backend

`APP_PORT=5007
FRONTEND_URL=http://localhost:5173/
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=Votre MDP
DB_NAME=devhub_connect
JWT_SECRET=your-256-bit-secret-key
JWT_EXPIRESIN=4h
APP_DECO=1`
