import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function SelectDatesProject({ dates }) {
  const [selectDatesProject, setSelectDatesProject] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectDatesProject(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <Stack>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Dates</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectDatesProject}
          onChange={handleChange}
          input={<OutlinedInput label="Dates" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {dates.map((date) => (
            <MenuItem key={date} value={dates}>
              <Checkbox checked={selectDatesProject.indexOf(date) > -1} />
              <ListItemText primary={date} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
SelectDatesProject.propTypes = {
  dates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  // projectStartDate: PropTypes.instanceOf(Date),
  // projectEndDate: PropTypes.instanceOf(Date),
};

SelectDatesProject.defaultProps = {
  dates: [],
  // projectStartDate: null,
  // projectEndDate: null,
};

export default SelectDatesProject;
