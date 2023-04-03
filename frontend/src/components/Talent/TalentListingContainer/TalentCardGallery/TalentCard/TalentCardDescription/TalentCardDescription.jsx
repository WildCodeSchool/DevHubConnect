import React from "react";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function TalentCardDescription({ biography }) {
  return (
    <Typography
      align="center"
      gutterBottom
      variant="body1"
      color="text.secondary"
      minHeight="3rem"
    >
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
