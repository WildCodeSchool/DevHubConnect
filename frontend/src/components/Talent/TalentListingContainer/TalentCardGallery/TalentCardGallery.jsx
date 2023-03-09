import React, { useState, useEffect } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import TalentCard from "./TalentCard/TalentCard";

function TalentCardGallery({ selectedJobs: selectedJobsProp }) {
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [selectedJobs, setSelectedJobs] = useState([]);

  const getTalents = () => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => response.data)
      .then((usersData) => {
        setUsers(usersData);
        console.info(usersData, "talents");
      });
  };

  const getJobs = () => {
    axios
      .get("http://localhost:5000/jobs")
      .then((response) => response.data)
      .then((jobsData) => {
        setJobs(jobsData);
        console.info(jobsData, "métiers");
      });
  };
  useEffect(() => {
    getTalents();
    getJobs();
  }, []);

  const filterByJob = (user) => {
    if (selectedJobs.length === 0) return true; // retourne tous les utilisateurs si aucun emploi sélectionné

    const userJob = jobs.find((job) => job.id === user.job_id);
    return selectedJobs.includes(userJob.job_name);
  };

  useEffect(() => {
    setSelectedJobs(selectedJobsProp);
  }, [selectedJobsProp]);
  return (
    <div>
      <Box sx={{ mt: 2 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="flex-start"
          alignItems="flex-start"
          mt="2"
          sx={{ flexWrap: "wrap", gap: 2 }}
        >
          {users.filter(filterByJob).map((user) => {
            return (
              <TalentCard
                key={user?.id}
                firstname={user?.firstname}
                lastname={user?.lastname}
                jobName={jobs[user.job_id]?.job_name}
                biography={user?.biography}
              />
            );
          })}
          ;
        </Stack>
      </Box>
    </div>
  );
}

TalentCardGallery.propTypes = {
  // selectedRegions: PropTypes.arrayOf(PropTypes.string),
  selectedJobs: PropTypes.arrayOf(PropTypes.string),
};

TalentCardGallery.defaultProps = {
  // selectedRegions: [],
  selectedJobs: [],
};

export default TalentCardGallery;
