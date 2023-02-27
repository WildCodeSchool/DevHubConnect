import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function TalentSelectRegion() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 300 }}>
        <InputLabel id="demo-multiple-name-label">Région</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Région" />}
          MenuProps={MenuProps}
        >
          {regions.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
