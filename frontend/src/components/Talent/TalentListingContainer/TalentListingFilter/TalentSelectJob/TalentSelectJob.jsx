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

const jobs = [
  "Développeur web",
  "Designer UX/UI",
  "Intégrateur web",
  "Développeur Front-End",
  "Développeur Back-End",
  "Chef de projet web",
  "Analyste en sécurité web",
  "Développeur Full Stack",
  "Expert SEO",
  "Scrum Master",
  "Testeur web",
  "Product Owner",
];

function TalentSelectJob() {
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
    <Stack>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Métiers</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={userSkills}
          onChange={handleChange}
          input={<OutlinedInput label="Métiers" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {jobs.map((skill) => (
            <MenuItem key={skill} value={skill}>
              <Checkbox checked={userSkills.indexOf(skill) > -1} />
              <ListItemText primary={skill} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}

export default TalentSelectJob;
// MuiSelectCheckmarks
