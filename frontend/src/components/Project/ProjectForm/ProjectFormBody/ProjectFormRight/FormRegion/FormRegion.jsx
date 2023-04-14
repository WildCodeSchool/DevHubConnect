import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Paper, FormControl, OutlinedInput, TextField } from "@mui/material";
import axios from "axios";

export default function FormRegion({
  selectedRegion,
  setSelectedRegion,
  erreurForm,
  setErreurForm,
}) {
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
    setErreurForm([]);
    setSelectedRegion(event.target.value);
  };

  const erreurRegion = erreurForm.filter((obj) => obj.field === "region_id");

  return (
    <Paper elevation={2} sx={{ p: 2, width: "100%" }}>
      <FormControl sx={{ m: 0, mt: 2, width: "100%" }}>
        {/* ------------------------------------------- */}
        <TextField
          id="multiple-region"
          select
          label="Région"
          value={selectedRegion}
          onChange={handleRegionChange}
          input={<OutlinedInput label="Choisir" />}
          error={Boolean(erreurRegion[0]?.message)}
          style={{ color: erreurRegion[0]?.message ? "red" : "" }}
          SelectProps={{
            native: true,
          }}
          helperText={erreurRegion[0]?.message ? erreurRegion[0]?.message : ""}
        >
          {regionListing.map((region) => (
            <option
              key={`${region.region_name}-${region.id}`}
              value={region.id}
            >
              {region.region_name}
            </option>
          ))}
        </TextField>
      </FormControl>
    </Paper>
  );
}

FormRegion.propTypes = {
  selectedRegion: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  setSelectedRegion: PropTypes.func,
  erreurForm: PropTypes.arrayOf(PropTypes.string),
  setErreurForm: PropTypes.arrayOf(PropTypes.string),
};

FormRegion.defaultProps = {
  selectedRegion: "",
  setSelectedRegion: "",
  erreurForm: {},
  setErreurForm: {},
};
