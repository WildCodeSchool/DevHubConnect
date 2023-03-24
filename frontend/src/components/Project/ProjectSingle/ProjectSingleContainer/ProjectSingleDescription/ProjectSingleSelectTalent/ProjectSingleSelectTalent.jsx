import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Typography,
  Paper,
  Grid,
  Stack,
  Button,
  Link,
  Avatar,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

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

  // Put de la candidature pour actualiser le user_status (1= en attente, 2= accepté, 3=non retenu).
  const updateCandidacy = async (candidacy, newStatus) => {
    const mysqlFormattedDate = format(
      new Date(candidacy.apply_date),
      "yyyy-MM-dd"
    );
    const updatedCandidacy = {
      ...candidacy,
      apply_date: mysqlFormattedDate,
      user_status: newStatus,
    };
    try {
      const response = await axios.put(
        `http://localhost:5007/candidacies/${candidacy.id}`,
        updatedCandidacy,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 200) {
        setCandidacies((prevCandidacies) =>
          prevCandidacies.map((prevCandidacy) =>
            prevCandidacy.id === candidacy.id ? updatedCandidacy : prevCandidacy
          )
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Stack>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        candidacies.map((candidacy) => {
          const user = users.find((us) => {
            return us.id === candidacy.user_id;
          });
          return (
            <Paper elevation={3} p={2} key={user.id}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  md={4}
                  direction={{ sm: "column", md: "row" }}
                  spacing={{ sm: 1, md: 2 }}
                  justifyContent="center"
                  alignItems="center"
                  p={2}
                >
                  <Avatar
                    alt={`photo de ${user?.firstname} ${user?.lastname} `}
                    src={`../../../../../../src/assets/user-img/${user?.user_image}`}
                    sx={{
                      width: 50,
                      height: 50,
                      border: 2,
                      borderColor: "primary.main",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0.5}
                    sx={{ width: "100%" }}
                  >
                    <Typography variant="body1" gutterBottom>
                      {jobs.find((j) => j.id === user?.job_id)?.job_name}
                    </Typography>

                    <Typography component="div" variant="h2">
                      {user?.firstname} {user?.lastname}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {candidacy.user_motivation}
                    </Typography>
                  </Stack>
                </Grid>
                <Stack direction="row" spacing={1} pt={2}>
                  <Link href={`/talent/${user?.id}`} underline="none">
                    <Button size="small">Détails du Talent</Button>
                  </Link>
                  <Button
                    variant="outlined"
                    color="success"
                    size="small"
                    onClick={() => {
                      updateCandidacy(candidacy, 2);
                    }}
                  >
                    Validé
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => {
                      updateCandidacy(candidacy, 3);
                    }}
                  >
                    Non Retenu
                  </Button>
                </Stack>
              </Grid>
            </Paper>
          );
        })
      )}
    </Stack>
  );
}

export default ProjectSingleSelectTalent;
