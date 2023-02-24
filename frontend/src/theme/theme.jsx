import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#AE8E5F",
      contrastText: "#fff",
    },
    secondary: {
      main: "#E8DBCB",
      contrastText: "#000",
    },
    backgroundGallery: {
      main: "#E8DBCB",
    },
    bgCard: {
      main: "#FDFDFB",
      contrastText: "#fff",
    },
    footerBG: {
      main: "#060403",
      contrastText: "#fff",
    },
    searhSelect: {
      main: "#e8dbcb00",
      contrastText: "#fff",
    },
    myFavoriteSelect: {
      main: "#e8dbcb00",
      contrastText: "#fff",
    },
  },
  typography: {
    subtitle1: {
      fontSize: 12,
      color: "#AE8E5F",
    },
    galeryH2: {
      fontSize: 40,
      color: "#060403",
    },
    subtitle2: {
      fontSize: 18,
      color: "#060403",
    },
    body1: {
      fontWeight: 500,
    },
    h2article: {
      fontSize: 40,
      color: "#FFF",
    },
    bodyarticle: {
      fontWeight: 500,
      color: "#FFF",
    },
    bodyartist: {
      fontSize: 20,
      fontWeight: 500,
      color: "#FFF",
    },
    footerBG: {
      color: "#E8DBCB",
    },
    titleDrawer: {
      color: "#060403",
      fontWeight: "700",
    },
  },
});

export default Theme;
