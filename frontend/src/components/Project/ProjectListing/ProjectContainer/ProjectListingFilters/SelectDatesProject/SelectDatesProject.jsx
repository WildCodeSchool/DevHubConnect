import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 18;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
};

const dates = [
  "2022-01-01 au 2022-04-01",
  "2022-04-01 au 2022-06-01",
  "2022-06-01 au 2022-09-01",
  "2022-09-01 au 2022-12-01",
];

function getStyles(date, datePeriod, theme) {
  return {
    fontWeight:
      datePeriod.indexOf(date) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectDatesProject() {
  const theme = useTheme();
  const [datePeriod, setDatePeriod] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDatePeriod(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Date</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={datePeriod}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="date" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {dates.map((date) => (
            <MenuItem
              key={date}
              value={date}
              style={getStyles(date, datePeriod, theme)}
            >
              {date}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
