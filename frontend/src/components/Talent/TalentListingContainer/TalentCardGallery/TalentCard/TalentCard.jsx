import * as React from "react";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import TalentAvatar from "./TalentAvatar/TalentAvatar";
import TalentCardName from "./TalentCardName/TalentCardName";
import TalentCardDescription from "./TalentCardDescription/TalentCardDescription";

export default function TalentCard({
  firstname,
  lastname,
  jobName,
  biography,
}) {
  return (
    <Paper>
      <CardActionArea>
        <Stack
          alignItems="center"
          sx={{ p: 2, sm: "50%", md: "25%" }}
          direction="column"
        >
          <Stack
            direction={{ xs: "row", sm: "row", md: "column" }}
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <TalentAvatar />
            <TalentCardName
              jobName={jobName}
              firstname={firstname}
              lastname={lastname}
            />
          </Stack>

          <TalentCardDescription biography={biography} />
        </Stack>
      </CardActionArea>
    </Paper>
  );
}
TalentCard.propTypes = {
  jobName: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  biography: PropTypes.string,
};

TalentCard.defaultProps = {
  jobName: "",
  firstname: "",
  lastname: "",
  biography: "",
};
