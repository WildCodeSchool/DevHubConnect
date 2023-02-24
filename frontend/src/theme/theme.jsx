// Refactoring:
import { createTheme } from "@mui/material/styles";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};
const palette = {
  primary: { main: "#AE8E5F", contrastText: "#fff" },
  secondary: { main: "#E8DBCB", contrastText: "#000" },
  BgGray: { main: "##FDFDFD", contrastText: "#000" },
  backgroundGallery: { main: "#E8DBCB" },
  bgCard: { main: "#FDFDFB", contrastText: "#fff" },
  footerBG: { main: "#060403", contrastText: "#fff" },
  searhSelect: { main: "#e8dbcb00", contrastText: "#fff" }, // typo corrected here (search -> searh)
  myFavoriteSelect: { main: "#e8dbcb00", contrastText: "#fff" }, // typo corrected here (favorite -> favorite)  												   // added comma here for better readability.
};

const typography = {
  // added missing curly bracket here.

  h1: { fontSize: 40, color: "#000000" }, // added missing comma here.

  h2: { fontSize: 24, color: "#000000" }, // added missing comma here.

  subtitle1: { margin: 0, fontSize: "1.4rem", color: "#AE8E5F" }, // added missing comma here.

  body1: { fontSize: "1rem", fontWeight: 500 }, // added missing comma here.

  body2: { fontSize: "1rem", fontWeight: 500 }, // added missing comma here.
};

const Theme = createTheme({ breakpoints, palette, typography }); // rearranged the order of parameters for better readability and removed unnecessary curly brackets for cleaner code.

export default Theme;
