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

function getStyles(region, regionName, theme) {
  return {
    fontWeight:
      regionName.indexOf(region) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectRegionsProject() {
  const theme = useTheme();
  const [regionName, setRegionName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setRegionName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Region</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={regionName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="region" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {regions.map((region) => (
            <MenuItem
              key={region}
              value={region}
              style={getStyles(region, regionName, theme)}
            >
              {region}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
