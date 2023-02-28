import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 1,
    },
  },
};

const jobs = [
  "Developpeur",
  "Designeur",
  "Scrum",
  "Product Owner",
  "Chef de projet",
];

function getStyles(job, personjob, theme) {
  return {
    fontWeight:
      personjob.indexOf(job) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function UserSettingJob() {
  const theme = useTheme();
  const [personjob, setPersonjob] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonjob(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Paper
      elevation={2}
      sx={{
        color: "UserDashboardCard.color",
        p: 3,
        backgroundColor: "UserSetting.Background",
      }}
    >
      <Typography variant="fieldBoxTitle" gutterBottom>
        Votre job actuel
      </Typography>
      <FormControl sx={{ m: 0, mt: 2, width: 1 }}>
        <InputLabel id="demo-multiple-job-label">job</InputLabel>
        <Select
          labelId="demo-multiple-job-label"
          id="demo-multiple-job"
          multiple
          value={personjob}
          onChange={handleChange}
          input={<OutlinedInput label="job" />}
          MenuProps={MenuProps}
        >
          {jobs.map((job) => (
            <MenuItem
              key={job}
              value={job}
              style={getStyles(job, personjob, theme)}
            >
              {job}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
}
