import React from "react";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";

export default function TalentAvatar({ firstname, lastname, userImage }) {
  return (
    <Avatar
      alt={`${firstname}, ${lastname}`}
      src={`../../../../../src/assets/user-img/${userImage}`}
      sx={{ width: 90, height: 90, alignItems: "center" }}
    />
  );
}

TalentAvatar.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  userImage: PropTypes.string,
};

TalentAvatar.defaultProps = {
  firstname: "",
  lastname: "",
  userImage: "",
};
