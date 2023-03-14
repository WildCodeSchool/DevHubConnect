import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "mui-image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Footer from "../components/Sidebar/Footer";
import LogoConnect from "../components/Sidebar/Logo";

const styles = {
  paperContainer: {
    backgroundImage: `url("https://picsum.photos/id/366/1600/500")`,
  },
};

export default function Home() {
  const token = localStorage.getItem("token");

  return (
    <Stack spacing={0}>
      <Paper
        style={styles.paperContainer}
        sx={{ borderRadius: 0 }}
        pt={{ xs: "4", sm: "3" }}
        height={{ xs: "700px", sm: "500px" }}
      >
        <CssBaseline />
        <Container Width="600px">
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            sx={{ color: "#FFF" }}
            height={{ xs: "700px", sm: "500px" }}
          >
            <Typography
              gutterBottom
              variant="h1"
              component="div"
              sx={{ color: "#FFF" }}
            >
              Trouvez votre développeur ou chef de projet parfait dès maintenant
              !
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              sx={{ color: "#FFF", fontSize: "1.2rem" }}
            >
              Nous savons à quel point il peut être difficile de trouver la
              bonne personne pour votre projet de développement. C'est pourquoi
              nous avons créé une marketplace qui met en relation des
              développeurs et des chefs de projet qualifiés. Trouvez votre
              expert en développement dès maintenant et lancez votre projet en
              un rien de temps.
            </Typography>
            {!token ? (
              <Stack spacing={2} direction="row">
                <Button variant="contained" href="/register">
                  S'inscrire
                </Button>
                <Button variant="outlined" href="/login">
                  Se connecter
                </Button>
              </Stack>
            ) : (
              <Button variant="contained" href="/dashboard">
                Aller au Dashbord
              </Button>
            )}
          </Stack>
        </Container>
      </Paper>
      <Paper
        sx={{
          borderRadius: 0,
          background: "linear-gradient(to right bottom, #E6A410, #B28011)",
          pl: 2,
          pr: 2,
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <LogoConnect />
        </Stack>
        <Container
          Width="600px"
          sx={{
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            mt: 0,
            mb: 4,
          }}
        >
          <Box>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={4}
            >
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{ color: "#B28011" }}
                >
                  La meilleure façon de trouver votre équipe de développement
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Vous cherchez une équipe de développement pour réaliser votre
                  projet ? Notre marketplace vous permet de trouver rapidement
                  et facilement des développeurs qualifiés, des chefs de projet
                  et des experts en technologie. Notre plateforme est conçue
                  pour vous aider à trouver l'équipe idéale pour votre projet,
                  quel que soit votre budget ou vos besoins.
                </Typography>
              </Stack>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{ color: "#B28011" }}
                >
                  Connectez-vous avec les meilleurs talents en développement
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Vous cherchez les meilleurs talents en développement pour
                  votre projet ? Notre marketplace vous permet de connecter avec
                  des développeurs et des chefs de projet qualifiés, prêts à
                  travailler sur votre projet dès maintenant. Nous avons les
                  meilleurs talents en développement de l'industrie pour vous
                  aider à atteindre vos objectifs de projet.
                </Typography>
              </Stack>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{ color: "#B28011" }}
                >
                  Trouvez des développeurs et des chefs de projet de qualité
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Nous savons que la qualité est essentielle lorsque vous
                  cherchez des développeurs et des chefs de projet pour votre
                  projet. Notre marketplace vous permet de trouver des
                  professionnels de qualité, prêts à travailler sur votre projet
                  et à répondre à tous vos besoins. Nous vérifions la qualité de
                  chaque profil pour nous assurer que vous travaillez avec les
                  meilleurs.
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Paper>
      <Paper sx={{ borderRadius: 0 }}>
        <Container Width="600px">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 4, sm: 6, md: 6 }}
            sx={{ mt: 6, mb: 6 }}
            justifyContent="space-around"
            alignItems="center"
          >
            <Image
              src="../../src/assets/icon/css-3.png"
              height={80}
              width={80}
            />
            <Image
              src="../../src/assets/icon/html-5.png"
              height={80}
              width={80}
            />
            <Image
              src="../../src/assets/icon/python.png"
              height={80}
              width={80}
            />
            <Image src="../../src/assets/icon/js.png" height={80} width={80} />
            <Image
              src="../../src/assets/icon/java.png"
              height={80}
              width={80}
            />
          </Stack>
        </Container>
      </Paper>
      <Paper sx={{ borderRadius: 0, background: "#eeeeee", pt: 4 }}>
        <Container Width="600px">
          <Typography variant="h2" component="div">
            Ils en parlent mieux que nous
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 4, sm: 6, md: 6 }}
            sx={{ mt: 6, mb: 6 }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Adrien Sergent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Lead developer chez Coca
                </Typography>
                <Typography variant="body1">
                  "J'étais à la recherche d'un développeur pour mon projet, mais
                  je ne savais pas par où commencer. Grâce à cette marketplace,
                  j'ai pu trouver rapidement des développeurs qualifiés et
                  compétents pour répondre à mes besoins. J'ai été agréablement
                  surpris par la qualité du service et la rapidité des réponses.
                  Je recommande cette marketplace à tous les chefs de projet qui
                  cherchent à trouver des développeurs de qualité pour leurs
                  projets."
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Wild Code School
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Training center
                </Typography>
                <Typography variant="body1">
                  "Nous avons été ravis de découvrir cette marketplace qui nous
                  a permis de trouver des développeurs compétents et motivés
                  pour nos projets de formation en informatique. La plateforme
                  nous a permis de sélectionner les profils les mieux adaptés à
                  nos besoins, en fonction de leur expérience, de leur niveau de
                  compétence et de leur disponibilité. Les échanges avec les
                  développeurs ont été fluides et nous avons pu collaborer
                  efficacement à distance grâce aux outils de communication
                  intégrés. Nous recommandons vivement cette marketplace à tous
                  ceux qui cherchent des talents pour leurs projets
                  informatiques !"
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Container>
      </Paper>
      <Paper
        sx={{
          borderRadius: 0,
          background: "#08517B",
          pt: 1,
          pb: 1,
        }}
      >
        <Box>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Footer />
          </Stack>
        </Box>
      </Paper>
    </Stack>
  );
}
