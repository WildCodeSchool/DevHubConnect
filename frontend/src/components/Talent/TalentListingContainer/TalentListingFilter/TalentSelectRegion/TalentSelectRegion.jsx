import React, { useState, useEffect } from "react";
import axios from "axios";
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

function TalentSelectRegion({ currentSelectedRegions, setSelectedRegions }) {
  const [userRegions, setUserRegions] = useState([]);
  const [regions, setRegions] = useState([]);

  const getRegions = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5007/regions", {
        headers: { Authorization: `Bearer ${token}` },
      })
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

    setSelectedRegions(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id="demo-multiple-checkbox-label">Régions</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={userRegions}
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
                currentSelectedRegions.indexOf(region.region_name) > -1
              }
            />
            <ListItemText primary={region.region_name} index={index} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

TalentSelectRegion.propTypes = {
  currentSelectedRegions: PropTypes.arrayOf(PropTypes.string),
  setSelectedRegions: PropTypes.func,
};

TalentSelectRegion.defaultProps = {
  currentSelectedRegions: [],
  setSelectedRegions: () => {},
};

export default TalentSelectRegion;
