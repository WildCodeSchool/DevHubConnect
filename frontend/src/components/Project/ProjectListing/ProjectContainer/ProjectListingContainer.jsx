import React, { useState, useEffect } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import ProjectListingCard from "./ProjectListingCard/ProjectListingCard";
import SelectRegionsProject from "./ProjectListingFilters/SelectRegionsProject/SelectRegionsProject";
import SelectSkillsProject from "./ProjectListingFilters/SelectSkillsProject/SelectSkillsProject";
import SelectDatesProject from "./ProjectListingFilters/SelectDatesProject/SelectDatesProject";

function ProjectListingContainer() {
  const [projectListing, setProjectListing] = useState([]);
  const [userListing, setUserListing] = useState([]);
  const [projectSkillListing, setProjectSkillListing] = useState([]);
  const [skillListing, setSkillListing] = useState([]);
  const [projectRegionListing, setProjectRegionListing] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");

  const getProjects = () => {
    axios
      .get("http://localhost:5007/projects")
      .then((response) => response.data)
      .then((projectsData) => {
        setProjectListing(projectsData);
        console.info(projectsData, "projectData");
      });
  };

  const getUsers = () => {
    axios
      .get("http://localhost:5007/users")
      .then((response) => response.data)
      .then((usersData) => {
        setUserListing(usersData);
        console.info(usersData, "usersData");
      });
  };

  const getProjectSkill = () => {
    axios
      .get("http://localhost:5007/project_skills")
      .then((response) => response.data)
      .then((projectsSkillData) => {
        // Utilisation de setProjectSkillListing pour mettre à jour le state projectSkillListing avec les données de l'API
        setProjectSkillListing(projectsSkillData);
        console.info(projectsSkillData, "projectSkillid");
      });
  };

  const getSkill = () => {
    axios
      .get("http://localhost:5007/skills")
      .then((response) => response.data)
      .then((skillData) => {
        // Utilisation de setSkillListing pour mettre à jour le state skillListing avec les données de l'API
        setSkillListing(skillData);
        console.info(skillData, "skillName");
      });
  };
  const getRegion = () => {
    axios
      .get("http://localhost:5007/regions")
      .then((response) => response.data)
      .then((regionData) => {
        setProjectRegionListing(regionData);
        console.info(regionData, "regionsData");
      });
  };

  useEffect(() => {
    getProjects();
    getUsers();
    getProjectSkill();
    getSkill();
    getRegion();
  }, []);

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  // };

  const handleSelectRegionsChange = (event) => {
    setSelectedRegions(event.target.value);
  };
  const handleSkillsChange = (event) => {
    setSelectedSkills(event.target.value);
  };
  const handleStartDateChange = (event) => {
    setSelectedStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setSelectedEndDate(event.target.value);
  };
  return (
    <>
      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={{ sm: 1, md: 2 }}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: "100%",
        }}
      >
        <SelectRegionsProject
          regions={projectRegionListing}
          selectedRegions={selectedRegions}
          handleRegionChange={handleSelectRegionsChange}
        />

        <SelectSkillsProject
          skillName={skillListing}
          skillsProject={projectSkillListing}
          handleSkillChange={handleSkillsChange}
        />
        <SelectDatesProject
          dates={projectListing.map((project, index) => {
            return {
              index,
              startDate: project.project_start_date,
              endDate: project.project_end_date,
            };
          })}
          projectStartDate={projectListing.project_start_date}
          projectEndDate={projectListing.project_end_date}
          handleChangeStartDate={handleStartDateChange}
          handleChangeEndDate={handleEndDateChange}
        />
      </Stack>
      {projectListing
        .filter(
          (project) =>
            (selectedRegions.length === 0 ||
              selectedRegions.includes(project.region_id)) &&
            (selectedSkills.length === 0 ||
              selectedSkills.some((skill) =>
                project.skills.some(
                  (projectSkill) => projectSkill.skill_id === skill.id
                )
              )) &&
            (selectedStartDate === "" ||
              project.project_start_date >= selectedStartDate) &&
            (selectedEndDate === "" ||
              project.project_end_date <= selectedEndDate)
        )

        .map((project) => {
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
              projectEndDate={project.project_end_date}
              regionName={regions}
              // handleRegionChange={handleSelectRegionsChange}
              handleRegionChange={handleSelectRegionsChange}
              handleSkillChange={handleSkillsChange}
              // handleChangeStartDate={handleStartDateChange}
              // handleChangeEndDate={handleEndDateChange}
            />
          );
        })}
    </>
  );
}
export default ProjectListingContainer;
