import React from "react";
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

function SelectSkillsProject({ skillName, skillsProject, handleSkillsChange }) {
  const [selectedSkills, setSelectedSkills] = React.useState(skillsProject);

  const handleChange = (event) => {
    const { value } = event.target;

    setSelectedSkills(typeof value === "string" ? value.split(",") : value);
    handleSkillsChange(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Stack>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Compétences</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedSkills}
          onChange={handleChange}
          input={<OutlinedInput label="Compétences" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {skillName.map((skill, index) => (
            <MenuItem key={skill.id} value={skill.skill_name}>
              <Checkbox
                checked={
                  selectedSkills.indexOf(skill.skill_name) > -1
                  // ||
                  // skillsProject.indexof(skill.skill_name) > -1
                }
              />
              <ListItemText primary={skill.skill_name} index={index} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}

SelectSkillsProject.propTypes = {
  skillName: PropTypes.string,
  skillsProject: PropTypes.string,
  handleSkillsChange: PropTypes.func,
};

SelectSkillsProject.defaultProps = {
  skillName: "",
  skillsProject: "",
  handleSkillsChange: () => {},
};

export default SelectSkillsProject;
