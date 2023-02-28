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
const regions = [
  "Ile-de-France",
  "Nord-Pas-de-Calais",
  "Champagne-Ardenne",
  "Picardie",
  "Haute-Normandie",
  "Basse-Normandie",
  "Bourgogne",
  "Franche-Comté",
  "Alsace",
  "Lorraine",
  "Languedoc-Roussillon",
  "Provence-Alpes-Côte d Azur",
  "Rhône-Alpes",
  "Aquitaine",
  "Midi-Pyrénées",
  "Poitou-Charentes",
  "Centre",
  "Bretagne",
  "Pays de la Loire",
  "Limousin",
  "Auvergne",
];
function SelectRegionsProject() {
  const [selectRegionsProject, setSelectRegionsProject] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectRegionsProject(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <Stack>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Régions</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectRegionsProject}
          onChange={handleChange}
          input={<OutlinedInput label="Régions" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {regions.map((region) => (
            <MenuItem key={region} value={region}>
              <Checkbox checked={selectRegionsProject.indexOf(region) > -1} />
              <ListItemText primary={region} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
export default SelectRegionsProject;
