import * as React from "react";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";

const itemsMenuTopBar = [
  { text: "Home", icon: <HomeIcon />, url: "/" },
  { text: "Dashboard", icon: <DashboardIcon />, url: "/dashboard" },
  { text: "login", icon: <PowerSettingsNewIcon />, url: "/login" },
];

export default function NavItemsTopBar() {
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      spacing={2}
    >
      {itemsMenuTopBar.map((item) => (
        <Link key={item.url} href={item.url}>
          {item.icon}
        </Link>
      ))}
    </Stack>
  );
}
