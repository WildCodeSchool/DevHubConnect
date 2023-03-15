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
  background: {
    default: "#EAEFF2",
  },
  primary: { main: "#0088CD", contrastText: "#fff" },
  secondary: { main: "#E05205", contrastText: "#FFFFFF" },
  BgContent: { main: "#eaeff2", contrastText: "#000" },
  BgSidebar: { main: "#1C2536", contrastText: "#000" },
  NavLink: { main: "#E9F3FA", contrastText: "#000", Hover: "#FFF" },
  bgCard: {
    main: "#FFF",
    BgColor: "#FFF",
    Bghover: "#FEFEFE",
    color: "#FFF",
    contrastText: "#fff",
  },
  UserDashboardCard: {
    main: "#FFF",
    Background: "#4CA0D8",
    Bghover: "#448ebf",
    color: "#FFF",
    hover: "#677880",
    contrastText: "#fff",
  },
  UserDashboardProjectSuggest: {
    main: "#FFF",
    background: "#FBFCEA",
    bghover: "#FBFCEA",
    border: "#BDCA03",
    color: "#859298",
    InProgress: "#a8b30a",
    Pending: "#E6A410",
    Paused: "#827e7f",
    Completed: "#028B96",
    Abandoned: "#B90231",
    contrastText: "#fff",
    spacing: [0, 2, 3, 5, 8],
  },
  UserDashboardCurrentProject: {
    main: "#FFF",
    background: "#FFF",
    bghover: "#fff8e7",
    border: "#E6A410",
    color: "#859298",
    InProgress: "#a8b30a",
    Pending: "#E6A410",
    Paused: "#827e7f",
    Completed: "#028B96",
    Abandoned: "#B90231",
    contrastText: "#fff",
    spacing: [0, 2, 3, 5, 8],
  },
  UserSetting: {
    main: "#FFF",
    color: "#82929b",
    background: "#FFF",
    bghover: "#F3F7CD",
    border: "#E6A410",
    InProgress: "#a8b30a",
    Pending: "#E6A410",
    Paused: "#827e7f",
    Completed: "#028B96",
    Abandoned: "#B90231",
    contrastText: "#fff",
    spacing: [0, 2, 3, 5, 8],
  },
  UserProjectCard: {
    main: "#FFF",
    color: "#82929b",
    background: "#a8b30a",
    bghover: "#F3F7CD",
    border: "#E6A410",
    InProgress: "#a8b30a",
    Pending: "#E6A410",
    Paused: "#827e7f",
    Completed: "#028B96",
    Abandoned: "#B90231",
    contrastText: "#fff",
    spacing: [0, 2, 3, 5, 8],
  },
  searchSelect: { main: "#e8dbcb00", contrastText: "#fff", color: "353535" }, // corrected typo here (searh -> search)
  myFavoritesSelect: {
    main: "#e8dbcb00",
    contrastText: "#fff",
    color: "353535",
  }, // corrected typo here (favorite -> favorites)
};

const typography = {
  // added missing curly bracket here.

  p: { fontSize: 14, color: "#353d42" },

  h1: { fontSize: 40, color: "#353d42", lineHeight: 1 },

  h2: { fontSize: 28, color: "#5d7280", fontWeight: 300 },

  h3: { fontSize: 20, color: "#353d42", fontWeight: 300 },

  h4: { fontSize: 18, color: "#A8B30A", fontWeight: 400 },

  h5: { fontSize: 18, color: "#027BB9", fontWeight: 400 },

  h6: { fontSize: 18, color: "#353d42", fontWeight: 400 },

  footer: { fontSize: 12, color: "#7CB7E2" },

  UserDaskboardSuggestDate: { fontSize: 12, color: "#A8B30A" },

  UserDaskboardCurrenttDate: { fontSize: 12, color: "#e6a410" },

  UserDashboardSkill: { fontSize: 14, color: "#353d42" },

  UserDashboardTitle: {
    fontSize: 20,
    color: "#5d7280",
    fontWeight: 300,
    lineHeight: 0,
  },

  accordionTitle: {
    fontSize: 22,
    color: "#5d7280",
    fontWeight: 300,
    lineHeight: 0,
  },

  subtitle1: {
    margin: 0,
    fontSize: "1.4rem",
    color: "#82929b",
    marginBottom: 10,
    fontWeight: 300,
    lineHeight: 1,
  },

  subtitle2: {
    margin: 0,
    fontSize: "1.4rem",
    color: "#5698C7",
    marginBottom: 10,
    fontWeight: 400,
  },

  fieldBoxTitle: {
    margin: 0,
    fontSize: "1.2rem",
    color: "#7998ab",
    marginBottom: 40,
    fontWeight: 400,
  },

  body1: { fontSize: 14, fontWeight: 500 }, // added missing comma here.

  body2: { fontSize: 14, fontWeight: 600 }, // added missing comma here.
};

const components = {
  MuiNativeSelect: {
    styleOverrides: {
      select: {
        color: "inherit", // Utilisez la couleur du texte héritée
      },
    },
  },
};

const Theme = createTheme({ breakpoints, palette, typography, components }); // rearranged the order of parameters for better readability and removed unnecessary curly brackets for cleaner code.

export default Theme;
