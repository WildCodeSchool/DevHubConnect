import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Stack from "@mui/material/Stack";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function UserDashboardCurrentProject() {
  const [projectListing, setProjectListing] = useState([]);
  const navigate = useNavigate();
  const userId = parseInt(localStorage.getItem("userId"), 10);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      const getProjects = () => {
        axios
          .get("http://localhost:5007/projects", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => response.data)
          .then((projectsData) => {
            setProjectListing(projectsData);
          });
      };

      getProjects();
    }
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <>
      {projectListing
        .filter((project) => {
          const startDate = new Date(project.project_start_date);
          const endDate = new Date(project.project_end_date);
          const today = new Date();
          return (
            startDate <= today &&
            today <= endDate &&
            userId === project.creator_id
          );
        })
        .map((project) => {
          return (
            <Paper key={project.id} sx={{ width: 1 }}>
              <Link href={`/project/${project.id}`} underline="none">
                <Stack
                  direction={{ sm: "row", md: "row" }}
                  spacing={{ sm: 1, md: 1 }}
                  justifyContent="flex-start"
                  alignItems="center"
                  p={0}
                  pl={{ sm: 3, md: 3 }}
                  pt={{ xs: 3, sm: 0 }}
                  sx={{
                    borderLeft: 4,
                    borderColor: "UserDashboardCurrentProject.border",
                  }}
                >
                  <PublishedWithChangesIcon
                    fontSize="large"
                    sx={{
                      color: "UserDashboardProjectSuggest.Pending",
                    }}
                  />
                  <Stack
                    direction={{ sm: "column", md: "row" }}
                    spacing={{ sm: 1, md: 2 }}
                    p={2}
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                      width: "100%",
                    }}
                  >
                    <Stack
                      direction="column"
                      justifyContent={{ xs: "center", sm: "flex-start" }}
                      alignItems={{
                        xs: "center",
                        sm: "center",
                        md: "flex-start",
                      }}
                      spacing={0.5}
                    >
                      <Typography component="div" variant="h2">
                        {project.project_name}
                      </Typography>
                      <Typography
                        component="div"
                        variant="UserDaskboardCurrenttDate"
                      >
                        Du {formatDate(project.project_start_date)} au{" "}
                        {formatDate(project.project_end_date)}
                      </Typography>
                      <Typography
                        variant="UserDashboardCurrentProject"
                        gutterBottom
                        sx={{
                          color: "UserDashboardCurrentProject.color",
                        }}
                      >
                        {project.project_about}
                      </Typography>
                    </Stack>
                    <AvatarGroup max={4}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://xsgames.co/randomusers/avatar.php?g=male"
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="https://xsgames.co/randomusers/avatar.php?g=female"
                      />
                      <Avatar
                        alt="Cindy Baker"
                        src="https://xsgames.co/randomusers/avatar.php?g=female"
                      />
                      <Avatar
                        alt="Agnes Walker"
                        src="https://xsgames.co/randomusers/avatar.php?g=male"
                      />
                      <Avatar
                        alt="Trevor Henderson"
                        src="https://xsgames.co/randomusers/avatar.php?g=female"
                      />
                    </AvatarGroup>
                  </Stack>
                </Stack>
              </Link>
            </Paper>
          );
        })}
    </>
  );
}
