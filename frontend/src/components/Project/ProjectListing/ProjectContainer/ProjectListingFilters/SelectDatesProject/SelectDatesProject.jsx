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
    <>
      <Stack
        components={["DatePicker"]}
        sx={{ width: 300, display: "flex", flexDirection: "row" }}
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
        sx={{ width: 300, display: "flex", flexDirection: "row" }}
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
    </>
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
