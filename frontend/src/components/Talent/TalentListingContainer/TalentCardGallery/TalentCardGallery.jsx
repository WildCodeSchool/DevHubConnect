import React, { useState, useEffect } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TalentCard from "./TalentCard/TalentCard";

function TalentCardGallery() {
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);

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

  return (
    <Box sx={{ mt: 2 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="flex-start"
        alignItems="flex-start"
        mt="2"
        sx={{ flexWrap: "wrap", gap: 2 }}
      >
        {users.map((user) => {
          return (
            <TalentCard
              key={user.id}
              firstname={user.firstname}
              lastname={user.lastname}
              jobName={jobs[user.job_id].job_name}
              biography={user.biography}
            />
          );
        })}
        ;
      </Stack>
    </Box>
  );
}

export default TalentCardGallery;
