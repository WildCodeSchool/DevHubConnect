import axios from "axios";
import React, { useState, useEffect } from "react";
import ProjectListingCard from "./ProjectListingCard/ProjectListingCard";

function ProjectListingContainer() {
  const [projectListing, setProjectListing] = useState([]);
  const [userListing, setUserListing] = useState([]);
  const [projectSkillListing, setProjectSkillListing] = useState([]);
  const [skillListing, setSkillListing] = useState([]);
  const [projectRegionListing, setProjectRegionListing] = useState([]);

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

  const getProjectSkill = () => {
    axios
      .get("http://localhost:5007/project_skills")
      .then((response) => response.data)
      .then((projectsSkillData) => {
        // Utilisation de setProjectSkillListing pour mettre à jour le state projectSkillListing avec les données de l'API
        setProjectSkillListing(projectsSkillData);
        console.info(projectsSkillData);
      });
  };

  const getSkill = () => {
    axios
      .get("http://localhost:5007/skills")
      .then((response) => response.data)
      .then((skillData) => {
        // Utilisation de setSkillListing pour mettre à jour le state skillListing avec les données de l'API
        setSkillListing(skillData);
        console.info(skillData);
      });
  };
  const getRegion = () => {
    axios
      .get("http://localhost:5007/regions")
      .then((response) => response.data)
      .then((regionData) => {
        setProjectRegionListing(regionData);
        console.info(regionData);
      });
  };

  useEffect(() => {
    getProjects();
    getUsers();
    getProjectSkill();
    getSkill();
    getRegion();
  }, []);

  return (
    <>
      {projectListing.map((project) => {
        const projectOwner = userListing.find(
          (user) => user.id === project.owner_id
        );

        // Création d'un tableau de compétences pour chaque projet
        const skills = projectSkillListing
          .filter((projectSkill) => projectSkill.project_id === project.id)
          .map((projectSkill) => {
            const skillItem = skillListing.find(
              (skill) => skill.id === projectSkill.skill_id
            );
            return skillItem ? skillItem.skill_name : "";
          });
        const regions = projectRegionListing
          .filter((projectRegion) => projectRegion.id === project.region_id)
          .map((projectRegion) => projectRegion.region_name);

        return (
          <ProjectListingCard
            key={project.id}
            id={project.id}
            projectImage={project.project_image}
            projectName={project.project_name}
            projectDescription={project.project_description}
            firstname={projectOwner ? projectOwner.firstname : ""}
            lastname={projectOwner ? projectOwner.lastname : ""}
            jobId={projectOwner ? projectOwner.job : ""}
            skillName={skills}
            projectStartDate={project.project_start_date}
            projectEndtDate={project.project_start_date}
            regionName={regions}
          />
        );
      })}
    </>
  );
}

export default ProjectListingContainer;
