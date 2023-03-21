import React, { useState, useEffect } from "react";
import {
  Paper,
  FormControl,
  InputLabel,
  NativeSelect,
  OutlinedInput,
} from "@mui/material";
import axios from "axios";

export default function FormRegion() {
  const [regionListing, setRegionListing] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState();

  useEffect(() => {
    async function fetchRegion() {
      try {
        const response = await axios.get(`http://localhost:5007/regions`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.info("response.data", response.data);
        setRegionListing(response?.data);
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
          defaultValue=""
        >
          {regionListing?.map((region) => (
            <option key={region.id} value={region.id}>
              {region.region_name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Paper>
  );
}
