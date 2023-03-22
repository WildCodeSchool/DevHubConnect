import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  Link,
  Avatar,
} from "@mui/material";
import { useParams } from "react-router-dom";

function ProjectSingleSelectTalent() {
  const [candidacies, setCandidacies] = useState([]);
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [candidaciesResponse, usersResponse, jobsResponse] =
          await Promise.all([
            axios.get(`http://localhost:5007/candidacies`, {
              headers: { Authorization: `Bearer ${token}` },
            }),
            axios.get("http://localhost:5007/users", {
              headers: { Authorization: `Bearer ${token}` },
            }),
            axios.get("http://localhost:5007/jobs", {
              headers: { Authorization: `Bearer ${token}` },
            }),
          ]);

        const candidaciesFilter = candidaciesResponse.data
          .filter((candidacy) => candidacy.project_id === parseInt(id, 2))
          .map((candidacy) => candidacy);
        setCandidacies(candidaciesFilter);

        const usersFilter = usersResponse.data
          .filter((user) =>
            candidaciesFilter
              .map((candidacy) => candidacy.user_id)
              .includes(user.id)
          )
          .map((user) => user);
        setUsers(usersFilter);

        setJobs(jobsResponse.data);

        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Paper
      elevation={2}
      sx={{
        color: "UserSetting.color",
        p: 3,
        backgroundColor: "UserSetting.Background",
        mb: 3,
      }}
    >
      <Typography
        component="div"
        variant="Body2"
        sx={{ pb: 2, textAlign: "center" }}
      >
        Ils ont postulé
      </Typography>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        candidacies.map((candidacy) => {
          const user = users.find((us) => {
            return us.id === candidacy.user_id;
          });

          return (
            <Box sx={{ width: "100%" }}>
              <Paper elevation={2}>
                <Stack
                  direction={{ sm: "column", md: "row" }}
                  spacing={{ sm: 1, md: 2 }}
                  justifyContent="flex-start"
                  alignItems="center"
                  p={2}
                >
                  <Avatar
                    alt={`photo de ${user?.firstname} ${user?.lastname} `}
                    src={user?.user_image}
                    sx={{
                      width: 50,
                      height: 50,
                      border: 4,
                      borderColor: "primary.main",
                    }}
                  />
                  <Stack
                    direction="column"
                    justifyContent={{ sm: "center", md: "flex-start" }}
                    alignItems={{
                      xs: "center",
                      sm: "center",
                      md: "flex-start",
                    }}
                    spacing={0.5}
                    sx={{ width: "100%" }}
                  >
                    <Stack direction="row" spacing={0.5}>
                      <Typography variant="body1" gutterBottom>
                        {jobs.find((j) => j.id === user?.job_id)?.job_name}
                      </Typography>
                    </Stack>
                    <Typography component="div" variant="h2">
                      {user?.firstname} {user?.lastname}
                    </Typography>
                    <Typography variant="body1" gutterBottom fullWidth>
                      {candidacy.user_motivation}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Link href={`/talent/${user?.id}`} underline="none">
                    <Button>Détails du Talent</Button>
                  </Link>
                  <Button variant="outlined" color="success">
                    Validé
                  </Button>
                  <Button variant="outlined" color="error">
                    Non Retenu
                  </Button>
                </Stack>
              </Paper>
            </Box>
          );
        })
      )}
    </Paper>
  );
}

export default ProjectSingleSelectTalent;
