/* import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ProjectSingleButtonPostuler({
  users,
  project,
  onClick,
}) {
  const [open, setOpen] = React.useState(false);
  const [motivation, setMotivation] = React.useState("");
  const [candidatureEnvoyee, setCandidatureEnvoyee] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCandidature = () => {
    // Envoyer un mail de confirmation au user
    users.forEach((user) => sendConfirmationMail(user.email));
    // Envoyer un mail de candidature au PO
    sendCandidatureMail(project.poEmail, users);

    // Mettre à jour l'état pour indiquer que la candidature a été envoyée
    setCandidatureEnvoyee(true);
  };
  // Vérifier si le postulant a déjà postulé sur ce projet
  const dejaPostule = checkDejaPostule(users.id, project.id);

  return (
    <>
      {dejaPostule ? (
        <div>Vous avez déjà postulé sur ce projet.</div>
      ) : (
        <button onClick={handleCandidature}>Envoyer ma candidature</button>
      )}
      {candidatureEnvoyee && (
        <div>Un mail de confirmation vous a été envoyé.</div>
      )}
    </>
  );
}
// Composant pour la vision du PO sur son projet
function Project({ project }) {
  const [users, setUsers] = React.useState(project.users);
  const [retenus, setRetenus] = React.useState(project.retenus);
  const [refuses, setRefuses] = React.useState(project.refuses);

  const handleValider = (user) => {
    // Envoyer un mail de validation au postulant
    sendValidationMail(user.email, project);
    // Ajouter le projet à la liste des projets à venir du postulant
    addProjectToMyProjects(user.id, project);

    // Mettre à jour la liste des postulants retenus
    setRetenus([...retenus, user]);

    // Retirer le postulant de la liste des postulants à considérer
    setUsers(users.filter((p) => p.id !== user.id));
  };

  const handleRefuser = (user, raison) => {
    // Envoyer un mail de refus au postulant avec la raison donnée
    sendRefusMail(user.email, project, raison);

    // Mettre à jour la liste des postulants refusés
    setRefuses([...refuses, { user, raison }]);

    // Retirer le postulant de la liste des postulants à considérer
    setUsers(users.filter((p) => p.id !== user.id));
    // Ajouter le projet à la liste des projets refusés du postulant
    addProjectToRefusedProjects(user.id, project);
  };
  const handleClose = () => {
    // Clôturer le projet
    closeProjet(projet.id);
  };

  //   return (

  //     projectName = { project_name },
  //     projectDescription = { project_description },
  //     dates = { project_dates },
  //     { users }
  //     < ul >
  //     {
  //       users.map((user) => (
  //         <li key={user.id}>
  //           {user_name}{" "}
  //           <button onClick={() => handleValider(user)}>Valider</button>{" "}
  //           <button onClick={() => handleRefuser(user, "Motif 1")}>
  //             Refuser
  //           </button>
  //         </li>
  //       ))
  //     }
  //  </ul >
  //   );
  // };
  const handleSubmit = () => {
    // Logique d'envoi de mail de confirmation au candidat et d'un mail de candidature au PO
    setCandidatureEnvoyee(true);
    handleClose();
  };
  const renderPostulerButton = () => {
    if (candidatureEnvoyee) {
      return (
        <Button variant="outlined" disabled>
          Vous avez déjà postulé sur ce projet
        </Button>
      );
    }
    return (
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Envoyer ma candidature
      </Button>
    );
  };

  return (
    <div>
      {renderPostulerButton()}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Postuler sur le projet {project.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Veuillez saisir votre motivation ci-dessous (max 160 caractères) :
          </DialogContentText>
          <TextField
            id="motivation-input"
            label="Motivation"
            multiline
            maxRows={4}
            value={motivation}
            onChange={(event) => setMotivation(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleSubmit} disabled={!motivation}>
            Envoyer ma candidature
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
} */
