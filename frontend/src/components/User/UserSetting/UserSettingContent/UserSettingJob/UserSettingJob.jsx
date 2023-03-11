import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Paper,
  OutlinedInput,
  InputLabel,
  FormControl,
  Typography,
  NativeSelect,
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

export default function UserSettingJob({ user, setUser }) {
  const [jobListing, setJobListing] = useState([]);
  const [selectedJob, setSelectedJob] = useState(
    user.job_id ? Number(user.job_id) : 0
  );

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await axios.get(`http://localhost:5007/jobs`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setJobListing(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchJobs();
  }, [user.id]);

  // Nouvel effet pour mettre à jour selectedJob lorsque user.job_id est modifié
  useEffect(() => {
    setSelectedJob(user.job_id ? Number(user.job_id) : 0);
  }, [user.job_id]);

  const handleJobChange = (event) => {
    const newJob = Number(event.target.value);
    setSelectedJob(newJob);
    setUser((prevUser) => ({ ...prevUser, job_id: newJob }));
  };

  const theme = useTheme();

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
        <NativeSelect
          labelId="multiple-job-label"
          id="multiple-job"
          value={selectedJob}
          onChange={handleJobChange}
          input={<OutlinedInput label="Choisir" />}
          selectMenuProps={MenuProps} // remplacer MenuProps par selectMenuProps
          defaultValue={user?.job_id}
        >
          {jobListing.map((job) => (
            <option
              key={job.id}
              value={job.id}
              style={getStyles(job.id, selectedJob, theme)}
            >
              {job.job_name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Paper>
  );
}

UserSettingJob.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    job_id: PropTypes.number,
  }).isRequired,
  setUser: PropTypes.func.isRequired,
};
