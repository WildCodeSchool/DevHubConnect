import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function TalentCardName({ firstname, lastname, jobName }) {
  console.info(jobName, "TalentCardName");
  return (
    <Stack direction="column" textAlign={{ xs: "flex-start", md: "center" }}>
      <Typography gutterBottom variant="body1" color="text.secondary">
        {jobName}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        {firstname} {lastname}
      </Typography>
    </Stack>
  );
}
// eslint-disable-next-line react/no-typos
TalentCardName.propTypes = {
  jobName: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
};

TalentCardName.defaultProps = {
  jobName: "",
  firstname: "",
  lastname: "",
};
