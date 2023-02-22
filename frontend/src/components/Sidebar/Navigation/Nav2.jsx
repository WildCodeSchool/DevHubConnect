import * as React from "react";
import { Link } from "react-router-dom";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

export default function Menu() {
  return (
    <MenuList>
      <MenuItem>
        <ListItemIcon>
          <SendIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit">
          <Link to="/">Home</Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <PriorityHighIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit">
          <Link to="/dashboard">Dashboard</Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap>
          <Link to="/dashboard/my-project">My Project</Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap>
          <Link to="/dashboard/my-setting">My Setting</Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap>
          <Link to="/dashboard/my-calendar">My Calendar</Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap>
          <Link to="/talent">Bourse aux talents</Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap>
          <Link to="/project">Bourse aux projets</Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap>
          <Link to="/add-project">Ajout de projet</Link>
        </Typography>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap>
          <Link to="/login">Login</Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap>
          <Link to="/register">Register</Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap>
          <Link to="/forgot-password">MDP oublié</Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap>
          <Link to="/terms">Terms</Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap>
          <Link to="/cgu">CGU</Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap>
          <Link to="*">404</Link>
        </Typography>
      </MenuItem>
    </MenuList>
  );
}
