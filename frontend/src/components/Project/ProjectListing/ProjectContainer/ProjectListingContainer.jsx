import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Grid } from "@mui/material";
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
  const [selectedRegionId, setSelectedRegionId] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedSkillId, setSelectedSkillId] = useState([]);
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");

  const token = localStorage.getItem("token");
  const getProjects = () => {
    axios

      .get("http://localhost:5007/projects", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((projectsData) => {
        setProjectListing(projectsData);
      });
  };

  const getUsers = () => {
    axios
      .get("http://localhost:5007/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((usersData) => {
        setUserListing(usersData);
      });
  };

  const getProjectSkill = () => {
    axios
      .get("http://localhost:5007/project_skills", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((projectsSkillData) => {
        // Utilisation de setProjectSkillListing pour mettre à jour le state projectSkillListing avec les données de l'API
        setProjectSkillListing(projectsSkillData);
      });
  };

  const getSkill = () => {
    axios
      .get("http://localhost:5007/skills", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((skillData) => {
        // Utilisation de setSkillListing pour mettre à jour le state skillListing avec les données de l'API
        setSkillListing(skillData);
      });
  };
  const getRegion = () => {
    axios
      .get("http://localhost:5007/regions", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((regionData) => {
        setProjectRegionListing(regionData);
      });
  };

  useEffect(() => {
    getProjects();
    getUsers();
    getProjectSkill();
    getSkill();
    getRegion();
  }, []);

  try {
    return (
      <>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mb={3}
        >
          <Grid item xs={3}>
            <SelectRegionsProject
              regions={projectRegionListing}
              selectedRegions={selectedRegions}
              setSelectedRegions={setSelectedRegions}
              selectedRegionId={selectedRegionId}
              setSelectedRegionId={setSelectedRegionId}
            />
          </Grid>
          <Grid item xs={3}>
            <SelectSkillsProject
              skillName={skillListing}
              skillsProject={projectSkillListing}
              selectedSkills={selectedSkills}
              setSelectedSkills={setSelectedSkills}
              selectedSkillId={selectedSkillId}
              setSelectedSkillId={setSelectedSkillId}
            />
          </Grid>
          <Grid item xs={6}>
            <SelectDatesProject
              selectedStartDate={selectedStartDate}
              setSelectedStartDate={setSelectedStartDate}
              selectedEndDate={selectedEndDate}
              setSelectedEndDate={setSelectedEndDate}
            />
          </Grid>
        </Grid>
        <Stack spacing={2}>
          {projectListing
            .filter(
              (project) =>
                (selectedRegions.length === 0 ||
                  selectedRegionId === project.region_id) &&
                (selectedSkills.length === 0 ||
                  /* eslint-disable-next-line */
                  selectedSkillId.some((selectedSkillId) =>
                    projectSkillListing.some(
                      (projectSkill) =>
                        projectSkill.skill_id === selectedSkillId &&
                        project.id === projectSkill.project_id
                    )
                  )) &&
                (!selectedStartDate ||
                  new Date(project.project_start_date) >=
                    new Date(selectedStartDate)) &&
                (!selectedEndDate ||
                  new Date(project.project_end_date) <=
                    new Date(selectedEndDate))
            )

            .map((project) => {
              const creatorImage = userListing.find(
                (user) => user.id === project.creator_id
              );

              // Création d'un tableau de compétences pour chaque projet
              const skills = projectSkillListing
                .filter(
                  (projectSkill) => projectSkill.project_id === project.id
                )
                .map((projectSkill) => {
                  const skillItem = skillListing.find(
                    (skill) => skill.id === projectSkill.skill_id
                  );

                  return skillItem ? skillItem.skill_name : "";
                });

              const regions = projectRegionListing
                .filter(
                  (projectRegion) => projectRegion.id === project.region_id
                )
                .map((projectRegion) => projectRegion.region_name);

              return (
                <ProjectListingCard
                  key={project.id}
                  id={project.id}
                  projectImage={project.project_image}
                  projectName={project.project_name}
                  projectAbout={project.project_about}
                  skillName={skills}
                  projectStartDate={project.project_start_date}
                  projectEndDate={project.project_end_date}
                  regionName={regions}
                  userImage={creatorImage?.user_image || ""}
                />
              );
            })}
        </Stack>
      </>
    );
  } catch (error) {
    console.error("Error in ProjectListingContainer: ", error);
    return <p>Oops! Something went wrong.</p>;
  }
}
export default ProjectListingContainer;
