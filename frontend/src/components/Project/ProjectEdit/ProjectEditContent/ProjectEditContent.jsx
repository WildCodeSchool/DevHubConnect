import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import axios from "axios";
import {
  Button,
  Stack,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Box,
  FormControl,
  InputLabel,
  NativeSelect,
  OutlinedInput,
  Grid,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { format } from "date-fns";
import { useNavigate, useParams } from "react-router-dom";

function EditProjectForm() {
  const { id } = useParams();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  const [regions, setRegions] = useState([]);
  const [projectSkills, setProjectSkills] = useState([]);
  const [skills, setSkills] = useState([]);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const navigate = useNavigate();

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  };

  useEffect(() => {
    const updateInitialValuesWithSkills = (allSkills) => {
      // Trouver les compétences du projet en utilisant la table de liaison
      const projectSkillsFromDatabase = allSkills.filter((skill) =>
        projectSkills.some((projectSkill) => projectSkill.skill_id === skill.id)
      );

      setInitialValues((prevValues) => ({
        ...prevValues,
        skillIds: projectSkillsFromDatabase.map((skill) => skill.id),
      }));
    };

    // Fonction asynchrone pour récupérer les données du projet, des compétences et des compétences du projet
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        // Récupérer les données du projet spécifique
        const projectResponse = await axios.get(
          `http://localhost:5007/projects/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        // Récupérer les compétences
        const skillsResponse = await axios.get("http://localhost:5007/skills", {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Récupérer les compétences du projet dans la table de liaison
        const projectSkillsResponse = await axios.get(
          `http://localhost:5007/project_skills`,
          {
            headers: { Authorization: `Bearer ${token}` },
            params: { project_id: id },
          }
        );
        setProjectSkills(projectSkillsResponse.data);

        // Mettre à jour l'état des compétences
        setSkills(skillsResponse.data);
        setDataLoaded(true);

        // Mettre à jour l'état des valeurs initiales du formulaire
        setInitialValues({
          project_name: projectResponse.data.project_name || "",
          project_start_date:
            formatDate(projectResponse.data.project_start_date) || "",
          project_end_date:
            formatDate(projectResponse.data.project_end_date) || "",
          project_about: projectResponse.data.project_about || "",
          project_description: projectResponse.data.project_description || "",
          project_state: !!projectResponse.data.project_state, // Convertir en booléen
          project_remote: !!projectResponse.data.project_remote, // Convertir en booléen
          project_image: projectResponse.data.project_image || "",
          region_id: projectResponse.data.region_id || "",
          creator_id: projectResponse.data.creator_id || "",
          skillIds: projectSkills.map((projectSkill) => projectSkill.skill_id),
        });

        // Mettre à jour les valeurs initiales avec les nouvelles compétences
        updateInitialValuesWithSkills(projectSkillsResponse.data);

        // Mettre à jour l'état des compétences du projet
        setProjectSkills(projectSkillsResponse.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    // Appeler la fonction fetchData pour récupérer les données lors du montage du composant
    fetchData();
  }, [id]);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleImageUpload = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const imgFile = event.target.files[0];
      const imgFileName = imgFile.name;

      setInitialValues((prevValues) => ({
        ...prevValues,
        project_image: imgFileName,
      }));

      const formData = new FormData();
      formData.append("image", imgFile);

      try {
        // Remplacez cette URL par l'URL de votre API pour la route d'upload d'image
        const uploadUrl = "http://localhost:3000/upload";

        const response = await fetch(uploadUrl, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.info("Image uploaded successfully.");
        } else {
          console.error("Error uploading image:", response.statusText);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const updateProject = async (dataToSend, token) => {
    // Convertir les dates au format compatible avec MySQL
    const mysqlFormattedStartDate = format(
      new Date(dataToSend.project_start_date),
      "yyyy-MM-dd"
    );
    const mysqlFormattedEndDate = format(
      new Date(dataToSend.project_end_date),
      "yyyy-MM-dd"
    );

    // Créer un nouvel objet avec les dates converties
    const dataToSendWithFormattedDates = {
      ...dataToSend,
      project_start_date: mysqlFormattedStartDate,
      project_end_date: mysqlFormattedEndDate,
    };

    try {
      await axios.put(
        `http://localhost:5007/projects/${id}`,
        dataToSendWithFormattedDates,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSnackbarMessage("Projet mis à jour avec succès !");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error updating project: ", error);
      setSnackbarMessage("Erreur lors de la mise à jour du projet.");
      setSnackbarOpen(true);
    }
  };

  const deleteProject = async (token) => {
    try {
      const response = await axios.delete(
        `http://localhost:5007/projects/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        navigate("/project");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du projet :", error);
    }
  };

  const fetchRegions = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`http://localhost:5007/regions`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setRegions(response.data);
  };

  useEffect(() => {
    fetchRegions();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {dataLoaded ? (
              <Formik
                initialValues={initialValues}
                onSubmit={async (values) => {
                  const token = localStorage.getItem("token");

                  // Créez un tableau contenant uniquement les skill_id de projectSkills
                  const skillIds = projectSkills
                    .filter((projectSkill) => projectSkill.skill_id !== null)
                    .map((projectSkill) => projectSkill.skill_id);

                  // Utilisez Set pour créer un ensemble unique de skillIds et convertir cet ensemble en tableau
                  const uniqueSkillIds = Array.from(new Set(skillIds));

                  // Ajoutez uniqueSkillIds au dataToSend
                  const dataToSend = {
                    ...values,
                    skillIds: uniqueSkillIds,
                  };

                  updateProject(dataToSend, token);
                }}
              >
                {({ values, handleChange }) => (
                  <Form
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      maxWidth: "500px",
                      margin: "auto",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      <Typography variant="fieldBoxTitle" gutterBottom>
                        Modifier un projet
                      </Typography>
                      <TextField
                        label="Nom du projet"
                        name="project_name"
                        value={values.project_name}
                        onChange={handleChange}
                      />
                      <TextField
                        label="Date de début"
                        name="project_start_date"
                        type="date"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={values.project_start_date}
                        onChange={handleChange}
                      />
                      <TextField
                        label="Date de fin"
                        name="project_end_date"
                        type="date"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={values.project_end_date}
                        onChange={handleChange}
                      />
                      <TextField
                        label="À propos du projet"
                        name="project_about"
                        value={values.project_about}
                        onChange={handleChange}
                        multiline
                        rows={4}
                      />
                      <TextField
                        label="Description du projet"
                        name="project_description"
                        value={values.project_description}
                        onChange={handleChange}
                        multiline
                        rows={10}
                      />
                      <TextField
                        label="Image du projet"
                        name="project_image"
                        type="file"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          accept: "image/*",
                        }}
                        onChange={(event) => {
                          handleChange(event);
                          handleImageUpload(event);
                        }}
                      />
                      <FormControl fullWidth>
                        <InputLabel id="region-select-label">Région</InputLabel>
                        <NativeSelect
                          id="region-select"
                          label="Région"
                          name="region_id"
                          value={values.region_id}
                          onChange={handleChange}
                          input={<OutlinedInput label="Région" />}
                          sx={{ color: "text.primary" }}
                        >
                          {regions.map((region) => (
                            <option key={region.id} value={region.id}>
                              {region.region_name}
                            </option>
                          ))}
                        </NativeSelect>
                      </FormControl>
                      <TextField
                        label="ID du créateur"
                        name="creator_id"
                        value={values.creator_id}
                        onChange={handleChange}
                        disabled
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={values.project_state}
                            onChange={handleChange}
                            name="project_state"
                          />
                        }
                        label="Projet en cours"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={values.project_remote}
                            onChange={handleChange}
                            name="project_remote"
                          />
                        }
                        label="Projet à distance"
                      />
                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                        >
                          Modifier
                        </Button>
                        <Button
                          type="button"
                          variant="contained"
                          color="secondary"
                          onClick={handleOpenDeleteDialog}
                        >
                          Supprimer
                        </Button>
                        <Dialog
                          open={openDeleteDialog}
                          onClose={handleCloseDeleteDialog}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title">
                            Voulez-vous vraiment supprimer ce projet ?
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              Cette action est irréversible et supprimera toutes
                              les données associées au projet.
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleCloseDeleteDialog}>
                              Annuler
                            </Button>
                            <Button
                              onClick={() => {
                                const token = localStorage.getItem("token");
                                deleteProject(token);
                                handleCloseDeleteDialog();
                              }}
                              autoFocus
                              color="secondary"
                            >
                              Supprimer
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </Stack>
                    </Box>
                  </Form>
                )}
              </Formik>
            ) : (
              <Typography variant="fieldBoxTitle" gutterBottom>
                Chargement des données du projet...
              </Typography>
            )}
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={handleCloseSnackbar}
              message={snackbarMessage}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack
              direction="column"
              spacing={{ xs: 3, sm: 3, md: 2 }}
              sx={{ m: { sm: 3, md: 2 } }}
            >
              <Typography variant="fieldBoxTitle" gutterBottom>
                Compétences du projet
              </Typography>
              <FormControl>
                {skills.map((skill) => (
                  <FormControlLabel
                    key={skill.id}
                    control={
                      <Checkbox
                        checked={projectSkills.some(
                          (projectSkill) => projectSkill.skill_id === skill.id
                        )}
                        onChange={(event) => {
                          if (event.target.checked) {
                            setProjectSkills([
                              ...projectSkills,
                              { skill_id: skill.id, id: null },
                            ]);
                          } else {
                            setProjectSkills(
                              projectSkills.filter(
                                (projectSkill) =>
                                  projectSkill.skill_id !== skill.id
                              )
                            );
                          }
                        }}
                      />
                    }
                    label={skill.skill_name}
                  />
                ))}
              </FormControl>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default EditProjectForm;
