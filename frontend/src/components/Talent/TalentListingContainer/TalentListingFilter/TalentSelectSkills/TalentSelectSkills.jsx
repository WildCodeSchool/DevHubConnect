import React, { useState, useEffect } from "react";
import axios from "axios";
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

function TalentSelectSkills({ selectedSkillIds, setSelectedSkillIds }) {
  const [userSkills, setUserSkills] = useState([]);
  const [skills, setSkills] = useState([]);

  const getSkills = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5007/skills", {
        headers: { Authorization: `Bearer ${token}` },
      })
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
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id="demo-multiple-skill-label">Compétences</InputLabel>
      <Select
        labelId="demo-multiple-skill-label"
        id="demo-multiple-skill"
        multiple
        value={userSkills}
        onChange={handleChange}
        input={<OutlinedInput label="Compétences" />}
        renderValue={(selected) => selected.join(", ")}
        menuprops={menuprops}
      >
        {skills
          .sort((a, b) => a.skill_name.localeCompare(b.skill_name))
          .map((skill, index) => (
            <MenuItem
              key={skill.id}
              value={skill.skill_name}
              onClick={() => {
                if (selectedSkillIds.includes(skill.id)) {
                  setSelectedSkillIds((prevState) =>
                    prevState.filter((id) => id !== skill.id)
                  );
                } else {
                  setSelectedSkillIds((prevState) => [...prevState, skill.id]);
                }
              }}
            >
              <Checkbox checked={userSkills.indexOf(skill.skill_name) > -1} />
              <ListItemText
                key={skill.id}
                primary={skill.skill_name}
                index={index}
              />
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

TalentSelectSkills.propTypes = {
  selectedSkillIds: PropTypes.arrayOf(PropTypes.string),
  setSelectedSkillIds: PropTypes.func,
};

TalentSelectSkills.defaultProps = {
  selectedSkillIds: [],
  setSelectedSkillIds: () => {},
};

export default TalentSelectSkills;
