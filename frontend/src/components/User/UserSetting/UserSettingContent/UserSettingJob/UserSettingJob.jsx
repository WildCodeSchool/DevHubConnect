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

function getStyles(jobId, selectedJob, theme) {
  return {
    fontWeight:
      selectedJob === jobId
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

export default function UserSettingJob({ userId }) {
  const theme = useTheme();
  const [jobListing, setJobListing] = useState([]);
  const [user, setUser] = useState(null);
  const [selectedJob, setSelectedJob] = useState(user?.job_id || "");

  const token = localStorage.getItem("token");
  const apiUrl = "http://localhost:5007";

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${apiUrl}/jobs`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJobListing(response.data);
        // console.info("Jobs : ", response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchJobs();
  }, [apiUrl, token]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        // console.info("user from UserSettingJob : ", response.data);
        setUser(response.data);
        setSelectedJob(response.data.job_id);
      } catch (error) {
        console.error(error);
        setUser(null);
      }
    };
    fetchUser();
  }, [apiUrl, userId, token]);

  const handleJobChange = (event) => {
    setSelectedJob(event.target.value);
  };

  return (
    <Paper
      elevation={2}
      sx={{
        color: "UserDashboardCard.color",
        p: 3,
        backgroundColor: "UserSetting.Background",
      }}
    >
      <Typography variant="fieldBoxTitle" gutterBottom>
        Le job qui te fait sauter du lit chaque matin
      </Typography>
      <FormControl sx={{ m: 0, mt: 2, width: "100%" }}>
        <InputLabel id="multiple-job-label">Job</InputLabel>
        <Select
          labelId="multiple-job-label"
          id="multiple-job"
          value={selectedJob}
          onChange={handleJobChange}
          input={<OutlinedInput label="Choisir" />}
          MenuProps={MenuProps}
        >
          {jobListing.map((job) => (
            <MenuItem
              key={job.id}
              value={job.id}
              style={getStyles(job.id, selectedJob, theme)}
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
