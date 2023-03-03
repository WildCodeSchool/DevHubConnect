import React from "react";
import Avatar from "@mui/material/Avatar";

function TalentAvatar() {
  return (
    <Avatar
      alt="avatar"
      src="https://xsgames.co/randomusers/avatar.php?g=male"
      sx={{ width: 90, height: 90, m: 2, alignItems: "center" }}
    />
  );
}

export default TalentAvatar;

// en props: { firstname, lastname, image }
// ds le alt={`${firstname} ${lastname}`}
// eslint-disable-next-line prettier/prettier
// ds src={image}