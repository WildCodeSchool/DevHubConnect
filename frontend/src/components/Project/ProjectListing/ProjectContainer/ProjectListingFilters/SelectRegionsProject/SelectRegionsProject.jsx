import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
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
  setSelectedRegions,
  setSelectedRegionId,
}) {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedRegions(value);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id="demo-multiple-checkbox-label">Régions</InputLabel>
      <Select
        labelId="regions-select-label"
        id="demo-multiple-checkbox"
        multiple
        value={selectedRegions}
        onChange={handleChange}
        input={<OutlinedInput label="Régions" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {regions.map((region) => (
          <MenuItem
            key={region.region_name}
            value={region.region_name}
            onClick={() => {
              setSelectedRegionId(region.id);
            }}
          >
            <Checkbox
              checked={selectedRegions.indexOf(region.region_name) > -1}
            />
            <ListItemText primary={region.region_name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

SelectRegionsProject.propTypes = {
  regions: PropTypes.string,
  selectedRegions: PropTypes.string,
  setSelectedRegions: PropTypes.string,
  setSelectedRegionId: PropTypes.string,
};

SelectRegionsProject.defaultProps = {
  regions: "",
  selectedRegions: "",
  setSelectedRegions: "",
  setSelectedRegionId: "",
};

export default SelectRegionsProject;
