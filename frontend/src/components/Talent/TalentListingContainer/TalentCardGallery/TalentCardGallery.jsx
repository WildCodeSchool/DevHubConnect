import React, { useState, useEffect } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import TalentCard from "./TalentCard/TalentCard";

function TalentCardGallery({
  selectedJobs: selectedJobsProp,
  selectedRegions: selectedRegionsProp,
}) {
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);

  const getTalents = () => {
    axios
      .get("http://localhost:5007/users")
      .then((response) => response.data)
      .then((usersData) => {
        setUsers(usersData);
        console.info(usersData, "talents pour card");
      });
  };

  const getJobs = () => {
    axios
      .get("http://localhost:5007/jobs")
      .then((response) => response.data)
      .then((jobsData) => {
        setJobs(jobsData);
        console.info(jobsData, "métiers pour card");
      });
  };

  const getRegions = () => {
    axios
      .get("http://localhost:5007/regions") // regions/:id
      .then((response) => response.data)
      .then((regionsData) => {
        setRegions(regionsData);
        console.info(regionsData, "regions pour card");
      });
  };

  useEffect(() => {
    getTalents();
    getJobs();
    getRegions();
  }, []);

  const filterByJob = (user) => {
    if (selectedJobs.length === 0) return true; // retourne tous les utilisateurs si aucun emploi sélectionné

    const userJob = jobs.find((job) => job.id === user.job_id);
    return selectedJobs.includes(userJob.job_name);
  };

  const filterByRegion = (user) => {
    if (selectedRegions.length === 0) return true;

    const userRegion = regions.find((region) => region.id === user.region_id);
    return selectedRegions.includes(userRegion.region_name);
  };

  useEffect(() => {
    setSelectedJobs(selectedJobsProp);
    setSelectedRegions(selectedRegionsProp);
  }, [selectedJobsProp, selectedRegionsProp]);
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
          {users
            .filter(filterByJob)
            .filter(filterByRegion)
            .map((user) => {
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
        </Stack>
      </Box>
    </div>
  );
}

TalentCardGallery.propTypes = {
  // selectedRegions: PropTypes.arrayOf(PropTypes.string),
  selectedJobs: PropTypes.arrayOf(PropTypes.string),
  selectedRegions: PropTypes.arrayOf(PropTypes.string),
};

TalentCardGallery.defaultProps = {
  // selectedRegions: [],
  selectedJobs: [],
  selectedRegions: [],
};

export default TalentCardGallery;
