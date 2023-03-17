import React from "react";
import Stack from "@mui/material/Stack";
import { Paper, FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";

function FormDates() {
  const handleChange = async (event) => {
    event.preventDefault();
    console.info("Coucou");
  };
  return (
    <FormControl sx={{ m: 0, width: "100%" }}>
      <Paper elevation={2} sx={{ p: 2, width: "100%" }}>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <TextField
            label="Date de début"
            name="project_start_date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value="" // {values.project_start_date}
            onChange={handleChange}
          />
          <TextField
            label="Date de fin"
            name="project_end_date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value="" // {values.project_end_date}
            onChange={handleChange}
          />
        </Stack>
      </Paper>
    </FormControl>
  );
}

export default FormDates;
