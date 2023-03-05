/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import UserProjectCurrent from "./UserProjectCurrent/UserProjectCurrent";
import UserProjectCard from "./UserProjectCard/UserProjectCard";
import UserProjectUpComing from "./UserProjectUpComing/UserProjectUpComing";
import UserProjectNotSelected from "./UserProjectNotSelected/UserProjectNotSelected";

export default function UserProjectContent() {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);

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

  const getUsers = () => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => response.data)
      .then((usersData) => {
        setUsers(usersData);
        console.info(usersData);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const currentProjects = projects.filter(
    (project) => project.status === "in_progress"
  );
  const upcomingProjects = projects.filter(
    (project) => project.status === "upcoming"
  );
  const notSelectedProjects = projects.filter(
    (project) => project.status === "not_selected"
  );
  return (
    <div>
      <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 4 }} flexWrap="wrap">
        <UserProjectCurrent currentProjects={currentProjects} />
        <UserProjectUpComing upcomingProjects={upcomingProjects} />
        <UserProjectNotSelected notSelectedProjects={notSelectedProjects} />
        {projects.map((project) => (
          <UserProjectCard
            key={project.id}
            id={project.id}
            projectName={project.project_name}
            projectDescription={project.project_description}
          />
        ))}
        {users.map((user) => (
          <UserProjectCard
            key={user.id}
            id={user.id}
            firstName={user.firstname}
            lastName={user.lastname}
          />
        ))}
      </Stack>
    </div>
  );
}
