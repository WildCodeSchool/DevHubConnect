import React, { useState, useEffect } from "react";
// import Stack from "@mui/material/Stack";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { Chip } from "@mui/material";
import ProjectSingleDescriptionContent from "./ProjectSingleDescription/ProjectSingleDescriptionContent/ProjectSingleDescriptionContent";
import ProjectSingleHeader from "./ProjectSingleHeader/ProjectSingleHeader";

function ProjectSingleContainer() {
  const { id } = useParams();
  // const projectId = id;
  const [projectSingleListing, setProjectSingleListing] = useState([]);
  // const [userSingleListing, setUserSingleListing] = useState([]);
  // const [projectSingleSkillListing, setProjectSingleSkillListing] = useState(
  //   []
  // );
  // const [skillSingleListing, setSkillSingleListing] = useState([]);
  const [projectSingleRegionListing, setProjectSingleRegionListing] = useState(
    []
  );

  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");

  const getProjects = () => {
    axios
      .get(`http://localhost:5007/projects/${id}`)
      .then((response) => response.data)
      .then((projectsData) => {
        setProjectSingleListing(projectsData);
        console.info(projectsData, " ProjectSingleContainer");
        console.info(projectsData.project_name);
      });
  };

  // const getUsers = () => {
  //   axios
  //     .get("http://localhost:5007/users")
  //     .then((response) => response.data)
  //     .then((usersData) => {
  //       setUserSingleListing(usersData);
  //       console.info(usersData);
  //     });
  // };

  // const getProjectSkill = () => {
  //   axios
  //     .get("http://localhost:5007/project_skills")
  //     .then((response) => response.data)
  //     .then((projectsSkillData) => {
  //       // Utilisation de setProjectSkillListing pour mettre à jour le state projectSkillListing avec les données de l'API
  //       setProjectSingleSkillListing(projectsSkillData);
  //       console.info(projectsSkillData, "projectSingleSkillListing");
  //     });
  // };

  // const getSkill = () => {
  //   axios
  //     .get("http://localhost:5007/skills")
  //     .then((response) => response.data)
  //     .then((skillData) => {
  //       // Utilisation de setSkillListing pour mettre à jour le state skillListing avec les données de l'API
  //       setSkillSingleListing(skillData);
  //       console.info(skillData);
  //     });
  // };
  const getRegion = () => {
    axios
      .get("http://localhost:5007/regions")
      .then((response) => response.data)
      .then((regionData) => {
        setProjectSingleRegionListing(regionData);
        console.info(regionData);
      });
  };

  useEffect(() => {
    getProjects();
    // getUsers();
    // getProjectSkill();
    // getSkill();
    getRegion();
  }, []);
  return (
    <>
      <ProjectSingleHeader projectName={projectSingleListing.project_name} />

      <ProjectSingleDescriptionContent
        key={projectSingleListing.id}
        id={projectSingleListing.id}
        projectImage={projectSingleListing.project_image}
        projectName={projectSingleListing.project_name}
        projectDescription={projectSingleListing.project_description}
        // firstname={projectOwner ? projectOwner.firstname : ""}
        // lastname={projectOwner ? projectOwner.lastname : ""}
        // jobId={projectOwner ? projectOwner.job : ""}
        // skillName={skills}
        projectStartDate={projectSingleListing.project_start_date}
        projectEndDate={projectSingleListing.project_end_date}
        regionName={projectSingleRegionListing.region_name}
      />

      {/* <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={1}
        pt={2}
      >
        {skillSingleListing
          .filter(
            (projectSingleSkillListing) =>
              skillSingleListing.project_id ===
              projectSingleSkillListing.project_id
          )
          .map((skillSingleListing) => {
            const skillFilterd = skillSingleListing.find(
              (skill) => skill.id === skillSingleListing.skill_id
            );
            return (
              <Chip
                key={skillFilterd.id}
                label={skillFilterd.skill_name}
                size="small"
              />
            );
          })}
      </Stack> */}

      {/* {/* // Array.isArray(projectSingleListing) &&
      //   projectSingleListing.map((project) => { */}
      {/* //     const projectOwner = userSingleListing.find(
      //       (user) => user.id === project.owner_id
      //     ); */}

      {/* // Création d'un tableau de compétences pour chaque projet
{Array.isArray(projectSingleSkillListing) 
          // const skills = projectSingleSkillListing
            .filter((projectSkill) => projectSkill.project_id === project.id)
            .map((projectSkill) => {
              const skillItem = skillSingleListing.find(
                (skill) => skill.id === projectSkill.skill_id
              );

              return skillItem ? skillItem.skill_name : "";
            }); */}

      {/* // const regions = projectSingleRegionListing
          //   .filter((projectRegion) => projectRegion.id === project.region_id)
          //   .map((projectRegion) => projectRegion.region_name); */}

      {/* return ( */}
      {/* <ProjectSingleDescriptionContent
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
            /> */}
    </>
  );
}
export default ProjectSingleContainer;
