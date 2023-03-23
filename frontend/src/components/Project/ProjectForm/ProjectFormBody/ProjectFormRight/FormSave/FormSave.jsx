import React from "react";
import PropTypes from "prop-types";
import { Box, Paper, Stack, Button } from "@mui/material";

export default function FormSave({ handleSubmitSave }) {
  return (
    <Paper elevation={8}>
      <Stack direction="row" justifyContent="center">
        <Box component="form" onSubmit={handleSubmitSave} noValidate>
          <Button type="submit" variant="contained" sx={{ mt: 1, mb: 1 }}>
            Enregistrer
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}

FormSave.propTypes = {
  handleSubmitSave: PropTypes.func,
};

FormSave.defaultProps = {
  handleSubmitSave: "",
};
