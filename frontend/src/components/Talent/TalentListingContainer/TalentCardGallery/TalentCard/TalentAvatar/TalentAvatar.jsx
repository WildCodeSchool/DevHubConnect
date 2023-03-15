import React from "react";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";

export default function TalentAvatar({ firstname, lastname }) {
  return (
    <Avatar
      alt={`${firstname}, ${lastname}`}
      src="http://pngimg.com/uploads/mark_zuckerberg/mark_zuckerberg_PNG35.png"
      sx={{ width: 90, height: 90, alignItems: "center" }}
    />
  );
}

TalentAvatar.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
};

TalentAvatar.defaultProps = {
  firstname: "",
  lastname: "",
};
