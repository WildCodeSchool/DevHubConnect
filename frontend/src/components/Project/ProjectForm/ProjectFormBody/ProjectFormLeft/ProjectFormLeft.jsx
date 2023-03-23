import React from "react";
import PropTypes from "prop-types";
import ProjectFormTexts from "./ProjectFormTexts/ProjectFormTexts";

export default function ProjectFormLeft({
  projectTitle,
  setProjectTitle,
  aboutProject,
  setAboutProject,
  projectDescription,
  setProjectDescription,
}) {
  return (
    <ProjectFormTexts
      projectTitle={projectTitle}
      setProjectTitle={setProjectTitle}
      aboutProject={aboutProject}
      setAboutProject={setAboutProject}
      projectDescription={projectDescription}
      setProjectDescription={setProjectDescription}
    />
  );
}

ProjectFormLeft.propTypes = {
  projectTitle: PropTypes.string,
  setProjectTitle: PropTypes.string,
  aboutProject: PropTypes.string,
  setAboutProject: PropTypes.string,
  projectDescription: PropTypes.string,
  setProjectDescription: PropTypes.string,
};

ProjectFormLeft.defaultProps = {
  projectTitle: "",
  setProjectTitle: "",
  aboutProject: "",
  setAboutProject: "",
  projectDescription: "",
  setProjectDescription: "",
};
