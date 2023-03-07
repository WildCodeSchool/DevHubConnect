/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import UserProjectCurrent from "./UserProjectCurrent/UserProjectCurrent";
import UserProjectUpComing from "./UserProjectUpComing/UserProjectUpComing";
import UserProjectNotSelected from "./UserProjectNotSelected/UserProjectNotSelected";

export default function UserProjectContent() {
  const [projects, setProjects] = useState([]);

  // Appel API Project

  const getProjects = () => {
    axios
      .get("http://localhost:5000/projects")
      .then((response) => response.data)
      .then((projectsData) => {
        setProjects(projectsData);
        console.info(projectsData);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4, ml: 25 }}
        flexWrap="wrap"
        width={1000}
      >
        <UserProjectCurrent currentProjects={projects} />
        <UserProjectUpComing upcomingProjects={projects} />
        <UserProjectNotSelected notSelectedProjects={projects} />
      </Stack>
    </div>
  );
}
