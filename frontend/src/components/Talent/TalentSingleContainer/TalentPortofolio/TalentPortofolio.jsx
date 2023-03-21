import React from "react";
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
  id: "",
};
export default TalentPortofolio;
