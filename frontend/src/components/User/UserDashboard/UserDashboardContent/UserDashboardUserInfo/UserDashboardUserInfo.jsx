import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function UserDashboardUserInfo() {
  const [user, setUser] = useState({});
  const [job, setJob] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = parseInt(localStorage.getItem("userId"), 10);

    if (!token) {
      navigate("/login");
    } else {
      const getUser = () => {
        axios
          .get(`http://localhost:5007/users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => response.data)
          .then((userData) => {
            setUser(userData);
            // console.info(userData);
          })
          .catch((error) => {
            console.error(error);
            navigate("/login");
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
            // console.info(jobData);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setIsLoading(false);
          });
      };

      getUser();
      getJobs();
    }
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Link href="/dashboard/my-setting" underline="none">
        <Paper
          elevation={2}
          sx={{
            color: "UserDashboardCard.color",
            backgroundColor: "UserDashboardCard.Background",
            "&:hover": {
              backgroundColor: "UserDashboardCard.Bghover",
            },
          }}
        >
          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={{ sm: 1, md: 2 }}
            justifyContent="flex-start"
            alignItems="center"
            p={2}
          >
            <Avatar
              alt="Remy Sharp"
              src={user.user_image}
              sx={{
                width: 100,
                height: 100,
                border: 4,
                borderColor: "primary.main",
              }}
            />
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={0.5}
              sx={{ width: "100%" }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={0.5}
              >
                {isLoading ? (
                  <Typography
                    variant="body1"
                    sx={{
                      color: "UserDashboardCard.color",
                    }}
                    gutterBottom
                  >
                    Chargement...
                  </Typography>
                ) : (
                  <Typography
                    variant="body1"
                    sx={{
                      color: "UserDashboardCard.color",
                    }}
                    gutterBottom
                  >
                    {job.find((j) => j.id === user.job_id)?.job_name}
                  </Typography>
                )}
                <Link href="/dashboard/my-setting" variant="body2">
                  <CreateOutlinedIcon fontSize="small" />
                </Link>
              </Stack>
              <Typography
                component="div"
                variant="h2"
                sx={{
                  color: "UserDashboardCard.color",
                }}
              >
                {user.firstname} {user.lastname}
              </Typography>
              <Typography variant="body1" gutterBottom fullWidth>
                {user.biography}
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      </Link>
    </Box>
  );
}
