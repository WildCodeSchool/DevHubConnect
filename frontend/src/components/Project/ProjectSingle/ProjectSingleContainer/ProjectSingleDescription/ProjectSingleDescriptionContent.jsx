import * as React from "react";
import {
  Chip,
  Box,
  Typography,
  Paper,
  Stack,
  Grid,
  CardMedia,
  Link,
  Modal,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import UserDashboardUserInfo from "../../../../User/UserDashboard/UserDashboardContent/UserDashboardUserInfo/UserDashboardUserInfo";
import ProjectSingleSelectTalent from "./ProjectSingleSelectTalent/ProjectSingleSelectTalent";

export default function ProjectSingleDescriptionContent({
  projectDescription,
  skillName,
  projectImage,
  id,
  creatorId,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const lignes = projectDescription.split("\n");
  const userId = parseInt(localStorage.getItem("userId"), 10);

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Paper
            elevation={2}
            sx={{
              color: "UserSetting.color",
              p: 3,
              backgroundColor: "UserSetting.Background",
            }}
          >
            <Typography
              component="div"
              variant="Body2"
              sx={{ pb: 2, textAlign: "center" }}
            >
              DETAIL DU PROJET
            </Typography>
            <Stack
              direction="row"
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
              sx={{
                p: 2,
              }}
              flexWrap="wrap"
            >
              {lignes.map((ligne) => (
                <span key={ligne}>
                  {ligne}
                  <br />
                </span>
              ))}
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              color: "UserSetting.color",
              backgroundColor: "UserSetting.Background",
              mb: 3,
            }}
          >
            <Link
              href={`/talent/${creatorId}`}
              underline="none"
              sx={{ width: 1 }}
            >
              <UserDashboardUserInfo creatorId={creatorId} />
            </Link>
          </Box>
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
              sx={{ color: "UserSetting.color", pb: 2, textAlign: "center" }}
            >
              COMPETENCES
            </Typography>
            <Stack
              direction="row"
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
              sx={{
                p: 2,
              }}
              flexWrap="wrap"
            >
              {skillName.map((skill, index) => {
                return (
                  <Chip
                    key={skill}
                    label={skill}
                    index={index}
                    size="small"
                    color="primary"
                  />
                );
              })}
            </Stack>
          </Paper>
          <Paper
            elevation={2}
            sx={{
              color: "UserSetting.color",
              backgroundColor: "UserSetting.Background",
            }}
            pb={2}
          >
            <CardMedia
              component="img"
              key={projectImage}
              image={`../../../../../src/assets/projects-img/${projectImage}`}
            />
          </Paper>
          {userId && userId === id ? (
            <Paper
              elevation={2}
              sx={{
                color: "UserSetting.color",
                p: 3,
                backgroundColor: "UserSetting.Background",
                mb: 3,
                mt: 4,
              }}
            >
              <Stack
                direction="row"
                display="flex"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
                sx={{
                  p: 2,
                }}
              >
                <Button onClick={handleOpen}>VOTRE EQUIPE</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "65%",
                      height: "70%",
                      bgcolor: "background.paper",
                      border: "2px solid #000",
                      boxShadow: 24,
                      pt: 2,
                      px: 4,
                      pb: 3,
                      msOverflowY: "auto",
                      maxHeight: "80%",
                      overflow: "scroll",
                    }}
                  >
                    <Button onClick={handleClose}>Close</Button>
                    <ProjectSingleSelectTalent />
                  </Box>
                </Modal>
              </Stack>
            </Paper>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

ProjectSingleDescriptionContent.propTypes = {
  projectDescription: PropTypes.string,
  skillName: PropTypes.string,
  projectImage: PropTypes.string,
  id: PropTypes.number,
  creatorId: PropTypes.number,
};

ProjectSingleDescriptionContent.defaultProps = {
  projectDescription: "",
  skillName: "",
  projectImage: "",
  id: null,
  creatorId: null,
};
