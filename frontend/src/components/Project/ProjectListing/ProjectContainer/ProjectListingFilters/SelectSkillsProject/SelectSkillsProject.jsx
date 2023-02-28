import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 20;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

const skills = [
  "HTML/CSS",
  "JavaScript",
  "PHP",
  "SQL",
  "Ruby on Rails",
  "Java",
  "Python",
  "C#",
  "AngularJS",
  "ReactJS",
  "Vue.js",
  "Node.js",
  "Express",
  "Django",
  "Flask",
  "ASP.NET",
  "Laravel",
  "Spring",
  "MongoDB",
  "Firebase",
];

function getStyles(skill, skillName, theme) {
  return {
    fontWeight:
      skillName.indexOf(skill) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectSkillsProject() {
  const theme = useTheme();
  const [skillName, setSkillName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSkillName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Skills</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={skillName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Skill" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {skills.map((skill) => (
            <MenuItem
              key={skill}
              value={skill}
              style={getStyles(skill, skillName, theme)}
            >
              {skill}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
