import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Paper,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
} from "@mui/material";
import axios from "axios";
import PropTypes from "prop-types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 2,
    },
  },
};

function getStyles(job, selectedJobs, theme) {
  return {
    fontWeight:
      selectedJobs.indexOf(job) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function UserSettingJob({ userId }) {
  const theme = useTheme();

  const [jobListing, setJobListing] = useState([]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:5007/jobs", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      });
      setJobListing(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const [user, setUser] = useState(null);
  const [selectedJobs, setSelectedJobs] = useState(user ? user.job_id : []);

  const handleJobChange = (event) => {
    setSelectedJobs(event.target.value);
  };

  useEffect(() => {
    async function fetchDataJob() {
      try {
        const response = await axios.get(
          `http://localhost:5007/jobs/${userId}`
        );
        setUser(response.data);
      } catch (error) {
        console.error(error);
        setUser(null);
      }
    }
    fetchDataJob();
  }, [userId]);

  return (
    <Paper
      elevation={2}
      sx={{
        color: "UserDashboardCard.color",
        p: 3,
        backgroundColor: "UserSetting.Background",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Le job qui te fait sauter du lit chaque matin
      </Typography>
      <FormControl sx={{ m: 0, mt: 2, width: "100%" }}>
        <InputLabel id="multiple-job-label">Job</InputLabel>
        <Select
          labelId="multiple-job-label"
          id="multiple-job"
          value={selectedJobs}
          onChange={handleJobChange}
          input={<OutlinedInput label="Choisir" />}
          MenuProps={MenuProps}
        >
          {jobListing.map((job) => (
            <MenuItem
              key={job.id}
              value={job.job_name}
              style={getStyles(job.job_name, selectedJobs, theme)}
            >
              {job.job_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
}

UserSettingJob.propTypes = {
  userId: PropTypes.number.isRequired,
};
