import * as React from "react";
import { Card, CardContent, Link, Stack } from "@mui/material";
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
  userImage,
}) {
  return (
    <Link href={`/talent/${id}`} underline="none">
      <Card>
        <CardContent>
          <Stack alignItems="center" direction="column">
            <Stack
              direction={{ xs: "row", sm: "column", md: "column" }}
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <TalentAvatar userImage={userImage} />
              <TalentCardName
                jobName={jobName}
                firstname={firstname}
                lastname={lastname}
                id={id}
              />
            </Stack>
            <TalentCardDescription biography={biography} />
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
}
TalentCard.propTypes = {
  id: PropTypes.number,
  jobName: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  biography: PropTypes.string,
  userImage: PropTypes.string,
};

TalentCard.defaultProps = {
  id: "",
  jobName: "",
  firstname: "",
  lastname: "",
  biography: "",
  userImage: "",
};
