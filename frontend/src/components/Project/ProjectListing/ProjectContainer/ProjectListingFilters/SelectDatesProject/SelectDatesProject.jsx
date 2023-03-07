import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

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
const dates = [
  "2022-01-01 au 2022-04-01",
  "2022-04-01 au 2022-06-01",
  "2022-06-01 au 2022-09-01",
  "2022-09-01 au 2022-12-01",
];
function SelectDatesProject() {
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
    <div>
      <FormControl sx={{ minWidth: 300 }}>
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
            <MenuItem key={date} value={date}>
              <Checkbox checked={selectDatesProject.indexOf(date) > -1} />
              <ListItemText primary={date} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
export default SelectDatesProject;
