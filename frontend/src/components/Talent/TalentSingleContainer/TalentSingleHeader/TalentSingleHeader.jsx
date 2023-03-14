import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PropTypes from "prop-types";

function TalentSingleHeader({ job, region, mail }) {
  return (
    <Stack spacing={2}>
      <Typography variant="h1">{job}</Typography>

      <Typography variant="subtitle1" gutterBottom>
        {region}
      </Typography>
      <Box m={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" startIcon={<SendIcon />}>
          {mail}
        </Button>
      </Box>
    </Stack>
  );
}

TalentSingleHeader.propTypes = {
  job: PropTypes.string,
  region: PropTypes.string,
  mail: PropTypes.string,
};

TalentSingleHeader.defaultProps = {
  job: "",
  region: "",
  mail: "",
};

export default TalentSingleHeader;
