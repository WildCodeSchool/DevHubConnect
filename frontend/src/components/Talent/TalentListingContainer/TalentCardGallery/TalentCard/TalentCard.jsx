import * as React from "react";
import { CardActionArea } from "@mui/material";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import TalentAvatar from "./TalentAvatar/TalentAvatar";
import TalentCardName from "./TalentCardName/TalentCardName";
import TalentCardDescription from "./TalentCardDescription/TalentCardDescription";

export default function TalentCard({
  id,
  firstname,
  lastname,
  jobName,
  biography,
}) {
  return (
    <Link href={`/talent/${id}`} underline="none">
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
    </Link>
  );
}
TalentCard.propTypes = {
  id: PropTypes.number,
  jobName: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  biography: PropTypes.string,
};

TalentCard.defaultProps = {
  jobName: "",
  id: 0,
  firstname: "",
  lastname: "",
  biography: "",
};
