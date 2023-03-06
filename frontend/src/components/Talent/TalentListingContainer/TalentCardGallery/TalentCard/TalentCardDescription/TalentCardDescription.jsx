import React from "react";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function TalentCardDescription({ biography }) {
  return (
    <Typography gutterBottom variant="body1" color="text.secondary" width={200}>
      {biography}
    </Typography>
  );
}
TalentCardDescription.propTypes = {
  biography: PropTypes.string,
};

TalentCardDescription.defaultProps = {
  biography: "",
};
