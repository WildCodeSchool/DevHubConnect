import * as React from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import UserSettingHeader from "../components/User/UserSetting/UserSettingHeader/UserSettingHeader";
import UserSettingContent from "../components/User/UserSetting/UserSettingContent/UserSettingContent";

export default function UserSetting() {
  const [user, setUser] = React.useState({
    id: "",
    about: "",
    firstName: "",
    lastName: "",
    CP: "",
    email: "",
    biography: "",
    password: "",
    job_id: "",
    user_image: "",
  });

  // Récupérer les informations de l'utilisateur
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    axios
      .get(`http://localhost:5007/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Stack spacing={2}>
      {/* Entête des paramètres de l'utilisateur */}
      <UserSettingHeader />
      {/* Contenu des paramètres de l'utilisateur */}
      <UserSettingContent
        user={{
          ...user,
          id: parseInt(user.id, 10),
          job_id: parseInt(user.job_id, 10),
        }}
      />
    </Stack>
  );
}
