import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";

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
function SelectSkillsProject() {
  const [skillsProject, setSkillsProject] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSkillsProject(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <Stack>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Skills</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={skillsProject}
          onChange={handleChange}
          input={<OutlinedInput label="skill" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {skills.map((skill) => (
            <MenuItem key={skill} value={skill}>
              <Checkbox checked={skillsProject.indexOf(skill) > -1} />
              <ListItemText primary={skill} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
export default SelectSkillsProject;
