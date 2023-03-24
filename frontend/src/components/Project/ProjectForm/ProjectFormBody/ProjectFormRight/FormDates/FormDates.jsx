import React, { useState } from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import Stack from "@mui/material/Stack";
import { Paper, FormControl } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function FormDates({ setStartDate, setEndDate }) {
  const [startDateLocal, setStartDateLocal] = useState("");
  const [endDateLocal, setEndDateLocal] = useState("");
  const handleStartDate = (newDate) => {
    setStartDate(format(new Date(newDate), "yyyy-MM-dd HH:mm:ss"));
    setStartDateLocal(newDate);
  };
  const handleEndtDate = (newDate) => {
    setEndDate(format(new Date(newDate), "yyyy-MM-dd HH:mm:ss"));
    setEndDateLocal(newDate);
  };
  return (
    <FormControl>
      <Stack flexGrow={1} alignItems="center">
        <Paper elevation={2} sx={{ p: 2, width: "100%" }}>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <DatePicker
              label="Date de début"
              format="dd/MM/yyyy"
              value={startDateLocal}
              onChange={handleStartDate}
            />
            <DatePicker
              label="Date de fin"
              format="dd/MM/yyyy"
              value={endDateLocal}
              onChange={handleEndtDate}
            />
          </Stack>
        </Paper>
      </Stack>
    </FormControl>
  );
}
FormDates.propTypes = {
  // startDate: PropTypes.instanceOf(Date),
  setStartDate: PropTypes.func,
  // endDate: PropTypes.instanceOf(Date),
  setEndDate: PropTypes.func,
};

FormDates.defaultProps = {
  // startDate: "",
  setStartDate: "",
  // endDate: "",
  setEndDate: "",
};

export default FormDates;
