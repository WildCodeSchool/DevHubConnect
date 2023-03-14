import React, { useState, useEffect } from "react";
// import Stack from "@mui/material/Stack";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { format } from "date-fns";
import ProjectSingleDescriptionContent from "./ProjectSingleDescription/ProjectSingleDescriptionContent/ProjectSingleDescriptionContent";
import ProjectSingleHeader from "./ProjectSingleHeader/ProjectSingleHeader";

function ProjectSingleContainer() {
  const { id } = useParams();

  const [projectSingleListing, setProjectSingleListing] = useState([]);
  const [setUserSingleListing] = useState([]);
  const [setjobSingleListing] = useState([]);
  const [projectSingleSkillListing, setProjectSingleSkillListing] = useState(
    []
  );
  const [skillSingleListing, setSkillSingleListing] = useState([]);

  const [projectSingleRegionListing, setProjectSingleRegionListing] = useState(
    []
  );

  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");
  const token = localStorage.getItem("token");

  const getProjects = () => {
    axios
      .get(`http://localhost:5007/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((projectsData) => {
        setProjectSingleListing(projectsData);
        console.info(projectsData, " ProjectSingleContainer");
        console.info(projectsData.creator_id);
      })
      .catch((error) => console.error(error));
  };
  const getUsers = () => {
    axios
      .get("http://localhost:5007/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((usersData) => {
        setUserSingleListing(usersData);
      })
      .catch((error) => console.error(error));
  };
  const getJobs = () => {
    axios
      .get("http://localhost:5007/jobs", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((jobsData) => {
        setjobSingleListing(jobsData);
        console.info(jobsData, "jobData");
      })
      .catch((error) => console.error(error));
  };

  const getProjectSkill = () => {
    axios
      .get("http://localhost:5007/project_skills", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((projectsSkillData) => {
        // Utilisation de setProjectSkillListing pour mettre à jour le state projectSkillListing avec les données de l'API
        setProjectSingleSkillListing(projectsSkillData);
      })
      .catch((error) => console.error(error));
  };

  const getSkill = () => {
    axios
      .get("http://localhost:5007/skills", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((skillData) => {
        // Utilisation de setSkillListing pour mettre à jour le state skillListing avec les données de l'API
        setSkillSingleListing(skillData);
        console.info(projectSingleSkillListing, "skillData");
      })
      .catch((error) => console.error(error));
  };
  const getRegion = () => {
    axios
      .get("http://localhost:5007/regions", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((regionData) => {
        setProjectSingleRegionListing(regionData);
        console.info(regionData, "regionData");
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getProjects();
    getUsers();
    getJobs();
    getProjectSkill();
    getSkill();
    getRegion();
  }, []);
  //   {
  //  const formattedStartDate = format(new Date(projectStartDate), "dd/MM/yyyy");

  //  const formattedEndDate = format(new Date(projectEndDate), "dd/MM/yyyy");
  //   }
  // const userProjectNames = userSingleListing
  //   .filter((user) => user.job === "Product Owner")
  //   .map((user) => {
  //     const userProjects = projectSingleListing.filter(
  //       (project) => project.creator_id === user.id
  //     );

  //     return {
  //       firstname: `${user.firstName} `,
  //       lastname: `${user.lastName}`,
  //       biographie: `${user.bio}`,
  //     };
  //   });

  // Création d'un tableau de compétences pour chaque projet
  const skills = projectSingleSkillListing
    .filter(
      (projectSkill) => projectSkill.project_id === projectSingleListing.id
    )
    .map((projectSkill) => {
      const skillItem = skillSingleListing.find(
        (skill) => skill.id === projectSkill.skill_id
      );
      return skillItem ? skillItem.skill_name : "";
    });

  const regions = projectSingleRegionListing
    .filter(
      (projectRegion) => projectRegion.id === projectSingleListing.region_id
    )
    .map((projectRegion) => projectRegion.region_name);

  return (
    <>
      <ProjectSingleHeader projectName={projectSingleListing.project_name} />

      <ProjectSingleDescriptionContent
        key={projectSingleListing.id}
        id={projectSingleListing.id}
        projectImage={projectSingleListing.project_image}
        projectName={projectSingleListing.project_name}
        projectDescription={projectSingleListing.project_description}
        // firstname={projectOwners.first_name}
        // lastname={projectOwners.last_name}
        jobId={projectSingleListing.job_name}
        skillName={skills}
        projectStartDate={projectSingleListing.project_start_date}
        projectEndDate={projectSingleListing.project_end_date}
        regionName={regions}
      />
    </>
  );
}

export default ProjectSingleContainer;
