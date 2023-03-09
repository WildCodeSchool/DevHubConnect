import React, { useState, useEffect } from "react";
import axios from "axios";
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

function TalentSelectRegion({ selectedRegions, setSelectedRegions }) {
  const [userRegions, setUserRegions] = useState([]);
  // sans const [userRegions, setUserRegions] ds la version filtre
  const [regions, setRegions] = useState([]);

  const getRegions = () => {
    axios
      .get("http://localhost:5000/regions")
      .then((response) => response.data)
      .then((regionsData) => {
        setRegions(regionsData);
      });
  };

  useEffect(() => {
    getRegions();
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setUserRegions(typeof value === "string" ? value.split(",") : value);
    // sans setUserRegions ds version filtre
    setSelectedRegions(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Stack>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Régions</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={userRegions}
          // value={selectedRegions} avec version filtre
          onChange={handleChange}
          input={<OutlinedInput label="Régions" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {regions.map((region, index) => (
            <MenuItem key={region.id} value={region.region_name}>
              <Checkbox
                checked={
                  userRegions.indexOf(region.region_name) > -1 ||
                  selectedRegions.indexOf(region.region_name) > -1
                }
                // checked={selectedRegions.indexOf(region.region_name) > -1} avec version filtre
              />
              <ListItemText primary={region.region_name} index={index} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}

TalentSelectRegion.propTypes = {
  selectedRegions: PropTypes.arrayOf(PropTypes.string),
  setSelectedRegions: PropTypes.func,
};

TalentSelectRegion.defaultProps = {
  selectedRegions: [],
  setSelectedRegions: () => {},
};

export default TalentSelectRegion;
