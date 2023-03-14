import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function UserSettingSaveButton({ user, setUser, onClick }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(user.password);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setUser((prevUser) => ({ ...prevUser, password: newPassword }));
  };

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="fieldBoxTitle" gutterBottom>
        Merci de taper votre mot de passe pour enregistrer
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <FormControl
          sx={{ width: { sm: "100%", md: "33%" } }}
          variant="outlined"
        >
          <OutlinedInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            onChange={handlePasswordChange}
            value={password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button variant="contained" color="secondary" onClick={onClick}>
          Enregistrer
        </Button>
      </Stack>
    </Paper>
  );
}

UserSettingSaveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  user: PropTypes.shape({
    password: PropTypes.string,
    id: PropTypes.number.isRequired,
  }).isRequired,
  setUser: PropTypes.func.isRequired,
};
