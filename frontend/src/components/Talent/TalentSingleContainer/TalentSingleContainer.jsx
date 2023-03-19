import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Container } from "@mui/material";
import { useParams } from "react-router-dom";
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

  const { id } = useParams();

  const token = localStorage.getItem("token");

  const getUser = () => {
    axios
      .get(`http://localhost:5007/users/${id}`, {
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
      <TalentSingleHeader
        job={job.find((j) => j.id === user.job_id)?.job_name}
        region={region.find((r) => r.id === user.region_id)?.region_name}
        mail={user.email}
        firstName={user.firstname}
      />
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TalentSingleCard
              avatar={user.user_image}
              firstName={user.firstname}
              lastName={user.lastname}
              bio={user.biography}
              job={job.find((j) => j.id === user.job_id)?.job_name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TalentSingleSkills id={user.id} />
          </Grid>
        </Grid>
        <Container sx={{ width: "100%", p: 5, textAlign: "center" }}>
          <TalentAbout about={user.about} />
        </Container>
        <TalentPortofolio id={user.id} />
      </Box>
    </Box>
  );
}

export default TalentSingleContainer;
