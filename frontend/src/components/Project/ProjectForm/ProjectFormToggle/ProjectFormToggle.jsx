import React from "react";
import PropTypes from "prop-types";
import {
  FormControlLabel,
  Stack,
  Typography,
  Switch,
  Box,
} from "@mui/material";

function ProjectFormToggle({ checked, setChecked }) {
  const handleChangeToggle = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Box>
      <Stack direction="row" alignItems="center" sx={{ ml: 5 }}>
        <Typography>Fermé</Typography>
        <FormControlLabel
          control={
            <Stack justifyContent="center" sx={{ ml: 4 }}>
              {/* penser à centrer le switch et supprimer le margin-left ml : 4 */}
              <Switch checked={checked} onChange={handleChangeToggle} />
            </Stack>
          }
        />
        <Typography>Ouvert</Typography>
      </Stack>
    </Box>
  );
}

ProjectFormToggle.propTypes = {
  checked: PropTypes.bool,
  setChecked: PropTypes.bool,
};

ProjectFormToggle.defaultProps = {
  checked: false,
  setChecked: false,
};

export default ProjectFormToggle;
