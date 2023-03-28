import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Paper,
  FormControl,
  InputLabel,
  NativeSelect,
  OutlinedInput,
} from "@mui/material";
import axios from "axios";

export default function FormRegion({ selectedRegion, setSelectedRegion }) {
  const [regionListing, setRegionListing] = useState([]);
  useEffect(() => {
    async function fetchRegion() {
      try {
        const response = await axios.get(`http://localhost:5007/regions`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const sortedRegions = response?.data.sort((a, b) => {
          return a.region_name.localeCompare(b.region_name);
        });
        setRegionListing(["", ...sortedRegions]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRegion();
  }, []);

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };
  return (
    <Paper elevation={2} sx={{ p: 2, width: "100%" }}>
      <FormControl sx={{ m: 0, mt: 2, width: "100%" }}>
        <InputLabel>Région</InputLabel>
        <NativeSelect
          id="multiple-region"
          value={selectedRegion}
          onChange={handleRegionChange}
          input={<OutlinedInput label="Choisir" />}
        >
          {regionListing.map((region) => (
            <option
              key={`${region.region_name}-${region.id}`}
              value={region.id}
            >
              {region.region_name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Paper>
  );
}

FormRegion.propTypes = {
  selectedRegion: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  setSelectedRegion: PropTypes.func,
};

FormRegion.defaultProps = {
  selectedRegion: "",
  setSelectedRegion: "",
};
