import * as React from "react";
import { Stack, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

function TalentAbout({ about }) {
  return (
    <Stack direction="column" spacing={2}>
      <Typography
        component="div"
        variant="h2"
        sx={{ p: 1, textAlign: "center" }}
      >
        A PROPOS
      </Typography>
      {/* Affichage du contenu "about" passé en paramètre */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {about}
      </Box>
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
