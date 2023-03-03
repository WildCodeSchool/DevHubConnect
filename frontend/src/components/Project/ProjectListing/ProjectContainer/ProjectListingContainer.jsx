import axios from "axios";
import React, { useState, useEffect } from "react";
import ProjectListingCard from "./ProjectListingCard/ProjectListingCard";

function ProjectListingContainer() {
  const [projectListing, setProjectListing] = useState([]);
  const [userListing, setUserListing] = useState([]);

  const getProjects = () => {
    axios
      .get("http://localhost:5007/projects")
      .then((response) => response.data)
      .then((projectsData) => {
        setProjectListing(projectsData);
        console.info(projectsData);
      });
  };

  const getUsers = () => {
    axios
      .get("http://localhost:5007/users")
      .then((response) => response.data)
      .then((usersData) => {
        setUserListing(usersData);
        console.info(usersData);
      });
  };

  useEffect(() => {
    getProjects();
    getUsers();
  }, []);

  return (
    <>
      {projectListing.map((project) => {
        const projectOwner = userListing.find(
          (user) => user.id === project.owner_id
        );
        return (
          <ProjectListingCard
            key={project.id}
            id={project.id}
            projectImage={project.project_image}
            projectName={project.project_name}
            projectDescription={project.project_description}
            firstname={
              projectOwner && userListing.length ? projectOwner.firstname : ""
            }
            lastname={
              projectOwner && userListing.length ? projectOwner.lastname : ""
            }
            jobId={projectOwner && userListing.length ? projectOwner.job : ""}
          />
        );
      })}
    </>
  );
}

export default ProjectListingContainer;
