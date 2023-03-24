import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const menuprops = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function SelectSkillsProject({
  skillName,
  handleSkillsChange,
  selectedSkills,
  setSelectedSkills,
  selectedSkillId,
  setSelectedSkillId,
}) {
  const handleChange = (event) => {
    const { value } = event.target;

    setSelectedSkills(typeof value === "string" ? value.split(",") : value);
    handleSkillsChange(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id="demo-multiple-checkbox-label">Compétences</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={selectedSkills}
        onChange={handleChange}
        input={<OutlinedInput label="Compétences" />}
        renderValue={(selected) => selected.join(", ")}
        menuprops={menuprops}
      >
        {skillName
          .sort((a, b) => a.skill_name.localeCompare(b.skill_name)) // tri par ordre alphabétique
          .map((skill) => (
            <MenuItem
              key={skill.id}
              value={skill.skill_name}
              onClick={() => {
                if (selectedSkillId.includes(skill.id)) {
                  setSelectedSkillId((prevState) =>
                    prevState.filter((id) => id !== skill.id)
                  );
                } else {
                  setSelectedSkillId((prevState) => [...prevState, skill.id]);
                }
              }}
            >
              <Checkbox
                checked={selectedSkills.indexOf(skill.skill_name) > -1}
              />
              <ListItemText primary={skill.skill_name} />
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

SelectSkillsProject.propTypes = {
  skillName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      skill_name: PropTypes.string.isRequired,
    })
  ),
  selectedSkills: PropTypes.arrayOf(PropTypes.string),
  setSelectedSkills: PropTypes.func,
  selectedSkillId: PropTypes.arrayOf(PropTypes.string),
  setSelectedSkillId: PropTypes.func,
  handleSkillsChange: PropTypes.func,
};

SelectSkillsProject.defaultProps = {
  skillName: [],
  selectedSkills: [],
  setSelectedSkills: () => {},
  selectedSkillId: [],
  setSelectedSkillId: () => {},
  handleSkillsChange: () => {},
};

export default SelectSkillsProject;
