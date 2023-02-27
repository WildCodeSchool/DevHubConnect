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

const skills = [
  "React",
  "JavaScript",
  "CSS",
  "HTML",
  "MUI",
  "Bootstrap",
  "MySQL",
  "ExpressJS",
  "NodeJS",
];

function TalentSelectSkills() {
  const [userSkills, setUserSkills] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setUserSkills(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Compétences</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={userSkills}
          onChange={handleChange}
          input={<OutlinedInput label="Compétences" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {skills.map((skill) => (
            <MenuItem key={skill} value={skill}>
              <Checkbox checked={userSkills.indexOf(skill) > -1} />
              <ListItemText primary={skill} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default TalentSelectSkills;
// MuiSelectCheckmarks
