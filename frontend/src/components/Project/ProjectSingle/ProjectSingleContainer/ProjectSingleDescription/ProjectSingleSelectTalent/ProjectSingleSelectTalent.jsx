import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Typography,
  Grid,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import TalentCard from "./talentCard.jsx/talentCard";

function ProjectSingleSelectTalent() {
  const [candidacies, setCandidacies] = useState([]);
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
        <>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="accordionTitle">
                Candidatures en attente
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                {candidacies
                  .filter((apply) => apply.user_status === 1)
                  .map((candidacy) => {
                    const user = users.find((us) => {
                      return us.id === candidacy.user_id;
                    });
                    return (
                      <Grid item xs={12} md={6} key={candidacy.id}>
                        <TalentCard
                          key={user?.id}
                          userId={user?.id}
                          firstName={user?.firstname}
                          lastName={user?.lastname}
                          image={user?.user_image}
                          job={
                            jobs.find((j) => j.id === user?.job_id)?.job_name
                          }
                          motivation={candidacy?.user_motivation}
                          status={candidacy?.user_status}
                          candidacy={candidacy}
                          updateCandidacy={updateCandidacy}
                        />
                      </Grid>
                    );
                  })}
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="accordionTitle">
                Candidatures validées
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                {candidacies
                  .filter((apply) => apply.user_status === 2)
                  .map((candidacy) => {
                    const user = users.find((us) => {
                      return us.id === candidacy.user_id;
                    });
                    return (
                      <Grid item xs={12} md={6} key={candidacy.id}>
                        <TalentCard
                          key={user?.id}
                          userId={user?.id}
                          firstName={user?.firstname}
                          lastName={user?.lastname}
                          image={user?.user_image}
                          job={
                            jobs.find((j) => j.id === user?.job_id)?.job_name
                          }
                          motivation={candidacy?.user_motivation}
                          candidacy={candidacy}
                          updateCandidacy={updateCandidacy}
                        />
                      </Grid>
                    );
                  })}
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="accordionTitle">
                Candidatures non retenues
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                {candidacies
                  .filter((apply) => apply.user_status === 3)
                  .map((candidacy) => {
                    const user = users.find((us) => {
                      return us.id === candidacy.user_id;
                    });
                    return (
                      <Grid item xs={12} md={6} key={candidacy.id}>
                        <TalentCard
                          key={user?.id}
                          userId={user?.id}
                          firstName={user?.firstname}
                          lastName={user?.lastname}
                          image={user?.user_image}
                          job={
                            jobs.find((j) => j.id === user?.job_id)?.job_name
                          }
                          motivation={candidacy?.user_motivation}
                          candidacy={candidacy}
                          updateCandidacy={updateCandidacy}
                        />
                      </Grid>
                    );
                  })}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </>
      )}
    </Stack>
  );
}

export default ProjectSingleSelectTalent;
