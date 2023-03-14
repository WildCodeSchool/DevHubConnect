import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

function TalentAbout({ about }) {
  return (
    <Stack spacing={1}>
      <Typography
        component="div"
        variant="h2"
        sx={{ p: 1, textAlign: "center" }}
      >
        A PROPOS
      </Typography>
      <Typography component="p" variant="body1" sx={{ p: 1 }}>
        {about}
      </Typography>
    </Stack>
  );
}

TalentAbout.propTypes = {
  about: PropTypes.string,
};

TalentAbout.defaultProps = {
  about: "",
};

export default TalentAbout;
