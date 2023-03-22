import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material/";
import PropTypes from "prop-types";
import TalentCard from "./TalentCard/TalentCard";

function TalentCardGallery({
  selectedJobs: selectedJobsProp,
  selectedRegions: selectedRegionsProp,
  selectedSkillIds,
}) {
  const token = localStorage.getItem("token");

  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [usersSkills, setUsersSkills] = useState([]);

  const getTalents = () => {
    axios
      .get("http://localhost:5007/users", {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((response) => response.data)
      .then((usersData) => {
        setUsers(usersData);
      });
  };

  const getJobs = () => {
    axios
      .get("http://localhost:5007/jobs", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((jobsData) => {
        setJobs(jobsData);
      });
  };

  const getRegions = () => {
    axios
      .get("http://localhost:5007/regions", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((regionsData) => {
        setRegions(regionsData);
      });
  };

  const getUserSkills = () => {
    axios
      .get("http://localhost:5007/user_skills", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((usersSkillsData) => {
        setUsersSkills(usersSkillsData);
      });
  };
  useEffect(() => {
    getTalents();
    getJobs();
    getRegions();
    getUserSkills();
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
  const filterBySkill = (user) => {
    if (selectedSkillIds.length === 0) return true;

    const userIdsWithSelectedSkills = usersSkills
      .filter((userSkill) => selectedSkillIds.includes(userSkill.skill_id))
      .map((userSkill) => userSkill.user_id);
    return userIdsWithSelectedSkills.includes(user.id);
  };

  useEffect(() => {
    setSelectedJobs(selectedJobsProp);
    setSelectedRegions(selectedRegionsProp);
  }, [selectedJobsProp, selectedRegionsProp]);

  return (
    <div>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {users
          .filter(filterByJob)
          .filter(filterByRegion)
          .filter(filterBySkill)
          .map((user) => {
            return (
              <Grid item xs={12} sm={6} md={3}>
                <TalentCard
                  key={user?.id}
                  id={user.id}
                  firstname={user?.firstname}
                  lastname={user?.lastname}
                  jobName={jobs[user.job_id - 1]?.job_name}
                  biography={user?.biography}
                  userImage={user?.user_image}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

TalentCardGallery.propTypes = {
  // selectedRegions: PropTypes.arrayOf(PropTypes.string),
  selectedJobs: PropTypes.arrayOf(PropTypes.string),
  selectedRegions: PropTypes.arrayOf(PropTypes.string),
  selectedSkillIds: PropTypes.arrayOf(PropTypes.string),
};

TalentCardGallery.defaultProps = {
  // selectedRegions: [],
  selectedJobs: [],
  selectedRegions: [],
  selectedSkillIds: [],
};

export default TalentCardGallery;
