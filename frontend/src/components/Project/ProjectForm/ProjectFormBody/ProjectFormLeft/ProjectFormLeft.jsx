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
  erreurForm,
  setErreurForm,
}) {
  // console.log(erreurForm);
  return (
    <ProjectFormTexts
      projectTitle={projectTitle}
      setProjectTitle={setProjectTitle}
      aboutProject={aboutProject}
      setAboutProject={setAboutProject}
      projectDescription={projectDescription}
      setProjectDescription={setProjectDescription}
      erreurForm={erreurForm}
      setErreurForm={setErreurForm}
    />
  );
}

ProjectFormLeft.propTypes = {
  projectTitle: PropTypes.string,
  setProjectTitle: PropTypes.func,
  aboutProject: PropTypes.string,
  setAboutProject: PropTypes.func,
  projectDescription: PropTypes.string,
  setProjectDescription: PropTypes.func,
  erreurForm: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  setErreurForm: PropTypes.func,
};

ProjectFormLeft.defaultProps = {
  projectTitle: "",
  setProjectTitle: "",
  aboutProject: "",
  setAboutProject: "",
  projectDescription: "",
  setProjectDescription: "",
  erreurForm: [],
  setErreurForm: "",
};
