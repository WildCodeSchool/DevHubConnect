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
    <FormControl sx={{ m: 0 }}>
      <Stack alignItems="center">
        <Paper elevation={2} sx={{ p: 2 }}>
          <Stack spacing={2}>
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
      </Stack>
    </FormControl>
  );
}

export default FormDates;
