import React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import { Paper, FormControl } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function FormDates({ startDate, setStartDate, endDate, setEndDate }) {
  return (
    <FormControl>
      <Stack alignItems="center">
        <Paper elevation={2} sx={{ p: 2 }}>
          <Stack direction="row" spacing={2}>
            <DatePicker
              label="Date de début"
              format="dd/MM/yyyy"
              value={startDate}
              onChange={(newDate) => setStartDate(newDate)}
            />
            <DatePicker
              label="Date de fin"
              format="dd/MM/yyyy"
              value={endDate}
              onChange={(newDate) => setEndDate(newDate)}
            />
          </Stack>
        </Paper>
      </Stack>
    </FormControl>
  );
}
FormDates.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  setStartDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  setEndDate: PropTypes.instanceOf(Date),
};

FormDates.defaultProps = {
  startDate: "",
  setStartDate: "",
  endDate: "",
  setEndDate: "",
};

export default FormDates;
