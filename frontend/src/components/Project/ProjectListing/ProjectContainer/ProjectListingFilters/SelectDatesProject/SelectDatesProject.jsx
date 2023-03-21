import React from "react";
import { Stack, Button } from "@mui/material";
import PropTypes from "prop-types";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function SelectDatesProject({
  selectedStartDate,
  setSelectedStartDate,
  selectedEndDate,
  setSelectedEndDate,
}) {
  const handleClearStartDate = () => {
    setSelectedStartDate(null);
  };

  const handleClearEndDate = () => {
    setSelectedEndDate(null);
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      spacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ width: "100%" }}
    >
      <Stack
        components={["DatePicker"]}
        sx={{ width: "100%" }}
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <DatePicker
          label="date de début"
          value={selectedStartDate}
          onChange={(newValue) => setSelectedStartDate(newValue)}
        />
        {selectedStartDate && (
          <Button onClick={handleClearStartDate} variant="outlined">
            X
          </Button>
        )}
      </Stack>
      <Stack
        components={["DatePicker"]}
        sx={{ width: "100%" }}
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <DatePicker
          label="date de fin"
          value={selectedEndDate}
          onChange={(newValue) => setSelectedEndDate(newValue)}
        />
        {selectedEndDate && (
          <Button onClick={handleClearEndDate} variant="outlined">
            X
          </Button>
        )}
      </Stack>
    </Stack>
  );
}
SelectDatesProject.propTypes = {
  selectedStartDate: PropTypes.instanceOf(Date),
  setSelectedStartDate: PropTypes.instanceOf(Date),
  selectedEndDate: PropTypes.instanceOf(Date),
  setSelectedEndDate: PropTypes.instanceOf(Date),
};

SelectDatesProject.defaultProps = {
  selectedStartDate: "",
  setSelectedStartDate: "",
  selectedEndDate: "",
  setSelectedEndDate: "",
};

export default SelectDatesProject;
