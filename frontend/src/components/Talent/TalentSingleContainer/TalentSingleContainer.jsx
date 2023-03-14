import React, { useEffect, useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import TalentSingleHeader from "./TalentSingleHeader/TalentSingleHeader";
import TalentSingleSkills from "./TalentSingleSkills/TalentSingleSkills";
import TalentAbout from "./TalentAbout/TalentAbout";
import TalentPortofolio from "./TalentPortofolio/TalentPortofolio";
import TalentSingleCard from "./TalentSingleCard/TalentSingleCard";
// import TalentCard from "../TalentListingContainer/TalentCardGallery/TalentCard/TalentCard";

function TalentSingleContainer() {
  const [user, setUser] = useState({});
  const [job, setJob] = useState([]);
  const [region, setRegion] = useState([]);

  const userId = 2;

  const token = localStorage.getItem("token");

  const getUser = () => {
    axios
      .get(`http://localhost:5007/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((userData) => {
        setUser(userData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getJobs = () => {
    axios
      .get("http://localhost:5007/jobs", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((jobData) => {
        setJob(jobData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getRegions = () => {
    axios
      .get("http://localhost:5007/regions", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then((regionData) => {
        setRegion(regionData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getUser();
    getJobs();
    getRegions();
  }, []);

  return (
    <Box>
      <Paper elevation={8} sx={{ mb: 2 }}>
        <Box sx={{ width: "100%", background: "#FFF", padding: 3 }}>
          <Stack spacing={2} sx={{ mb: 2 }}>
            <TalentSingleHeader
              job={job.find((j) => j.id === user.job_id)?.job_name}
              region={region.find((r) => r.id === user.region_id)?.region_name}
              mail={user.email}
            />
          </Stack>
        </Box>
      </Paper>

      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        justifyContent="space-between"
        // alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
        spacing={3}
      >
        <TalentSingleCard
          avatar={user.user_image}
          firstName={user.firstname}
          lastName={user.lastname}
          bio={user.biography}
        />
        <TalentSingleSkills id={user.id} />
      </Stack>
      <TalentAbout about={user.about} />
      <TalentPortofolio />
    </Box>
  );
}

export default TalentSingleContainer;
