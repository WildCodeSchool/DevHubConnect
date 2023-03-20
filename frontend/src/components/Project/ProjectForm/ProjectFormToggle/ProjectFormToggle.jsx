import React from "react";
import {
  FormControlLabel,
  Stack,
  Typography,
  Switch,
  Box,
} from "@mui/material";

function ProjectFormToggle() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
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
              <Switch checked={checked} onChange={handleChange} />
            </Stack>
          }
        />
        <Typography>Ouvert</Typography>
      </Stack>
    </Box>
  );
}

export default ProjectFormToggle;
