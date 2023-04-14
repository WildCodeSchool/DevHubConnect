import React, { useState } from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import Stack from "@mui/material/Stack";
import { Paper, FormControl } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function FormDates({ setStartDate, setEndDate, erreurForm, setErreurForm }) {
  const [startDateLocal, setStartDateLocal] = useState("");
  const [endDateLocal, setEndDateLocal] = useState("");
  const handleStartDate = (newDate) => {
    setErreurForm([]);
    setStartDate(format(new Date(newDate), "yyyy-MM-dd HH:mm:ss"));
    setStartDateLocal(newDate);
  };
  const handleEndtDate = (newDate) => {
    setErreurForm([]);
    setEndDate(format(new Date(newDate), "yyyy-MM-dd HH:mm:ss"));
    setEndDateLocal(newDate);
  };
  const erreurStartDate = erreurForm.filter(
    (obj) => obj.field === "project_start_date"
  );
  const erreurEndDate = erreurForm.filter(
    (obj) => obj.field === "project_end_date"
  );

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
              slotProps={{
                textField: {
                  error: Boolean(erreurStartDate[0]?.message),
                  helperText: erreurStartDate[0]?.message,
                },
              }}
            />
            <DatePicker
              label="Date de fin"
              format="dd/MM/yyyy"
              value={endDateLocal}
              onChange={handleEndtDate}
              slotProps={{
                textField: {
                  error: Boolean(erreurEndDate[0]?.message),
                  helperText: erreurEndDate[0]?.message,
                },
              }}
            />
          </Stack>
        </Paper>
      </Stack>
    </FormControl>
  );
}
FormDates.propTypes = {
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func,
  erreurForm: PropTypes.arrayOf(PropTypes.string),
  setErreurForm: PropTypes.func,
};

FormDates.defaultProps = {
  setStartDate: "",
  setEndDate: "",
  erreurForm: {},
  setErreurForm: {},
};

export default FormDates;
