import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

export default function UserSettingSaveButton({ onClick }) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <Button variant="contained" color="secondary" onClick={onClick}>
        Enregistrer
      </Button>
    </Stack>
  );
}

UserSettingSaveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
