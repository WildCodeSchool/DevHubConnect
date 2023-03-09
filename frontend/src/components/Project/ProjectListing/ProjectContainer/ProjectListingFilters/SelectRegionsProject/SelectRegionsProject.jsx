import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function SelectRegionsProject({
  regions,
  selectedRegions,
  handleRegionsChange,
}) {
  const [selectRegionsProject, setSelectRegionsProject] =
    React.useState(selectedRegions);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectRegionsProject(value);
    handleRegionsChange(value);
  };

  return (
    <Stack>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Régions</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectRegionsProject}
          onChange={handleChange}
          input={<OutlinedInput label="Régions" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {regions.map((region) => (
            <MenuItem key={region.region_name} value={region.region_name}>
              <Checkbox
                checked={selectRegionsProject.indexOf(region.region_name) > -1}
              />
              <ListItemText primary={region.region_name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}

SelectRegionsProject.propTypes = {
  regions: PropTypes.string,
  selectedRegions: PropTypes.string,
  handleRegionsChange: PropTypes.func,
};

SelectRegionsProject.defaultProps = {
  regions: "",
  selectedRegions: "",
  handleRegionsChange: () => {},
};

export default SelectRegionsProject;
