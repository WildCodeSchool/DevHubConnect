import React, { useState, useEffect } from "react";
import axios from "axios";
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

function TalentSelectSkills() {
  const [userSkills, setUserSkills] = useState([]);
  const [skills, setSkills] = useState([]);

  const getSkills = () => {
    axios
      .get("http://localhost:5007/skills")
      .then((response) => response.data)
      .then((data) => {
        setSkills(data);
      });
  };

  useEffect(() => {
    getSkills();
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setUserSkills(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Stack>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-skill-label">Compétences</InputLabel>
        <Select
          labelId="demo-multiple-skill-label"
          id="demo-multiple-skill"
          multiple
          value={userSkills}
          onChange={handleChange}
          input={<OutlinedInput label="Compétences" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {skills.map((skill, index) => (
            <MenuItem key={skill.id} value={skill.skill_name}>
              <Checkbox checked={userSkills.indexOf(skill.skill_name) > -1} />
              <ListItemText primary={skill.skill_name} index={index} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}

export default TalentSelectSkills;
