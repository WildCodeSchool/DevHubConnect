import React from "react";
// import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import TalentPortofolioTitle from "./TalentPortofolioTitle/TalentPortofolioTitle";
import TalentPortofolioGallery from "./TalentPortofolioGallery/TalentPortofolioGallery";

function TalentPortofolio({ id }) {
  return (
    <div>
      <TalentPortofolioTitle />
      <TalentPortofolioGallery id={id} />
    </div>
  );
}

TalentPortofolio.propTypes = {
  id: PropTypes.number,
};

TalentPortofolio.defaultProps = {
  id: null,
};
export default TalentPortofolio;
