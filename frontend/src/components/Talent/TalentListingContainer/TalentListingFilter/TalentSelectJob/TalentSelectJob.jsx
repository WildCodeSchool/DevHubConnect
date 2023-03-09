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

function TalentSelectJob({ currentSelectedJobs, setSelectedJobs }) {
  const [userJobs, setUserJobs] = useState([]);
  const [jobs, setJobs] = useState([]);

  const getJobs = () => {
    axios
      .get("http://localhost:5000/jobs")
      .then((response) => response.data)
      .then((jobsData) => {
        setJobs(jobsData);
      });
  };

  useEffect(() => {
    getJobs();
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setUserJobs(typeof value === "string" ? value.split(",") : value);
    setSelectedJobs(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Stack>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Métiers</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={userJobs}
          onChange={handleChange}
          input={<OutlinedInput label="Métiers" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {jobs.map((job, index) => (
            <MenuItem key={job.id} value={job.job_name}>
              <Checkbox
                checked={
                  userJobs.indexOf(job.job_name) > -1 ||
                  currentSelectedJobs.indexOf(job.job_name) > -1
                }
              />
              <ListItemText primary={job.job_name} index={index} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}

TalentSelectJob.propTypes = {
  currentSelectedJobs: PropTypes.arrayOf(PropTypes.string),
  setSelectedJobs: PropTypes.func,
};

TalentSelectJob.defaultProps = {
  currentSelectedJobs: [],
  setSelectedJobs: () => {},
};

export default TalentSelectJob;
