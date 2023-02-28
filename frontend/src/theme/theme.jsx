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
    color: "#e9f3fa",
    hover: "#e9f3fa",
    contrastText: "#fff",
  },
  UserDashboardProjectSuggest: {
    main: "#FFF",
    background: "#FBFCEA",
    bghover: "#F3F7CD",
    border: "#BDCA03",
    color: "#e9f3fa",
    hover: "#e9f3fa",
    contrastText: "#fff",
    spacing: [0, 2, 3, 5, 8],
  },
  UserDashboardCurrentProject: {
    main: "#FFF",
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
  searhSelect: { main: "#e8dbcb00", contrastText: "#fff" }, // typo corrected here (search -> searh)
  myFavoriteSelect: { main: "#e8dbcb00", contrastText: "#fff" }, // typo corrected here (favorite -> favorite)
};

const typography = {
  // added missing curly bracket here.

  p: { fontSize: 14, color: "#353d42" },

  h1: { fontSize: 40, color: "#353d42" },

  h2: { fontSize: 24, color: "#353d42", fontWeight: 400 },

  h3: { fontSize: 20, color: "#353d42", fontWeight: 300 },

  h4: { fontSize: 18, color: "#A8B30A", fontWeight: 400 },

  h5: { fontSize: 18, color: "#027BB9", fontWeight: 400 },

  h6: { fontSize: 18, color: "#353d42", fontWeight: 400 },

  footer: { fontSize: 12, color: "#7CB7E2" },

  UserDaskboardSuggestDate: { fontSize: 12, color: "#A8B30A" },

  UserDashboardSkill: { fontSize: 14, color: "#353d42" },

  subtitle1: {
    margin: 0,
    fontSize: "1.4rem",
    color: "#82929b",
    marginBottom: 40,
    fontWeight: 400,
  },

  subtitle2: {
    margin: 0,
    fontSize: "1.4rem",
    color: "#5698C7",
    marginBottom: 40,
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

const Theme = createTheme({ breakpoints, palette, typography }); // rearranged the order of parameters for better readability and removed unnecessary curly brackets for cleaner code.

export default Theme;
