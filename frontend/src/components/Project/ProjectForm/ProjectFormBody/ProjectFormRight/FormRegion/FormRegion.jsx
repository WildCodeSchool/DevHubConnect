import React, { useState, useEffect } from "react";
import {
  Paper,
  FormControl,
  InputLabel,
  NativeSelect,
  OutlinedInput,
} from "@mui/material";
import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useTheme } from "@mui/material/styles";
// import {
//   Paper,
//   OutlinedInput,
//   InputLabel,
//   FormControl,
//   Typography,
//   NativeSelect,
// } from "@mui/material";
// import axios from "axios";
// import PropTypes from "prop-types";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 2,
//     },
//   },
// };

// function getStyles(jobId, selectedJob, theme) {
//   return {
//     fontWeight:
//       selectedJob === jobId
//         ? theme.typography.fontWeightMedium
//         : theme.typography.fontWeightRegular,
//   };
// }

export default function FormRegion() {
  const [regionListing, setRegionListing] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState();
  // user.region_id ? Number(regions.job_id) : 0
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

  // // Nouvel effet pour mettre à jour selectedJob lorsque user.job_id est modifié
  // useEffect(() => {
  //   setSelectedJob(user.job_id ? Number(user.job_id) : 0);
  // }, [user.job_id]);

  const handleRegionChange = (event) => {
    // const newRegion = Number(event.target.value);
    setSelectedRegion(event.target.value);
    // setUser((prevRegion) => ({ ...prevRegion, region_id: newregion }));
  };

  // const theme = useTheme();

  return (
    <Paper elevation={2} sx={{ p: 2, width: "100%" }}>
      <FormControl sx={{ m: 0, mt: 2, width: "100%" }}>
        <InputLabel>Région</InputLabel>
        <NativeSelect
          id="multiple-region"
          value={selectedRegion}
          onChange={handleRegionChange}
          input={<OutlinedInput label="Choisir" />}
          // selectMenuProps={MenuProps} // remplacer MenuProps par selectMenuProps
          defaultValue="" // {region?.id}
        >
          {regionListing?.map((region) => (
            <option
              key={region.id}
              value={region.id}
              // style={getStyles(region.id, selectedRegion, theme)}
            >
              {region.region_name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Paper>
  );
}
