import React from "react";
import { Stack, Button } from "@mui/material";
import PropTypes from "prop-types";
import { DatePicker } from "@mui/x-date-pickers";
import { parseISO } from "date-fns";

export default function SelectDatesProject({
  selectedStartDate, // date de début sélectionnée
  setSelectedStartDate, // fonction pour modifier la date de début sélectionnée
  selectedEndDate, // date de fin sélectionnée
  setSelectedEndDate, // fonction pour modifier la date de fin sélectionnée
}) {
  const handleClearStartDate = () => {
    setSelectedStartDate(null); // effacer la date de début sélectionnée
  };

  const handleClearEndDate = () => {
    setSelectedEndDate(null); // effacer la date de fin sélectionnée
  };

  // Utiliser une variable locale pour stocker la valeur de selectedStartDate
  let startDate = selectedStartDate;

  // Vérifier que la valeur de startDate est bien une instance de Date
  if (startDate && !(startDate instanceof Date)) {
    startDate = parseISO(startDate);
  }

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      spacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ width: "100%" }}
    >
      <Stack
        sx={{ width: "100%" }}
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <DatePicker
          label="date de début"
          value={startDate} // Utilisez startDate au lieu de formattedStartDate
          onChange={(newValue) => setSelectedStartDate(newValue)}
        />

        {startDate && (
          <Button onClick={handleClearStartDate} variant="outlined">
            X
          </Button>
        )}
      </Stack>
      <Stack
        sx={{ width: "100%" }}
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <DatePicker
          label="date de fin"
          value={selectedEndDate} // Utilisez selectedEndDate au lieu de formattedEndDate
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

// définir les types de props attendues
SelectDatesProject.propTypes = {
  selectedStartDate: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
  setSelectedStartDate: PropTypes.func.isRequired,
  selectedEndDate: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
  setSelectedEndDate: PropTypes.func.isRequired,
};

// définir les valeurs par défaut des props pour éviter les erreurs
SelectDatesProject.defaultProps = {
  selectedStartDate: null,
  selectedEndDate: null,
};
