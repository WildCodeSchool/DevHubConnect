import React from "react";
import { Paper, Stack, Typography, Link, Grid, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

export default function TalentCard({
  userId,
  firstName,
  lastName,
  image,
  job,
  motivation,
  status,
  candidacy,
  updateCandidacy,
}) {
  return (
    <Paper
      elevation={2}
      sx={{
        backgroundColor: "UserProjectCard.Background",
        "&:hover": {
          backgroundColor: "UserProjectCard.bghover",
        },
        borderLeft: 6,
        borderColor: "UserProjectCard.Completed",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            sx={{
              pt: 2,
              pl: 2,
            }}
          >
            <Avatar
              alt={`photo de ${firstName} ${lastName} `}
              src={`../../../../../../../src/assets/user-img/${image}`}
              sx={{
                width: 50,
                height: 50,
                border: 2,
                borderColor: "primary.main",
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={0.5}
              sx={{ width: "100%" }}
            >
              <Typography variant="body1" gutterBottom>
                {job}
              </Typography>

              <Typography component="div" variant="h2">
                {firstName} {lastName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {motivation}
              </Typography>
            </Stack>
          </Grid>
          <Stack direction="row" spacing={1} pt={2}>
            <Link href={`/talent/${userId}`} underline="none">
              <Button size="small">Détails du Talent</Button>
            </Link>
            {status === 1 ? (
              <>
                <Button
                  variant="outlined"
                  color="success"
                  size="small"
                  onClick={() => {
                    updateCandidacy(candidacy, 2);
                  }}
                >
                  Validé
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => {
                    updateCandidacy(candidacy, 3);
                  }}
                >
                  Non Retenu
                </Button>
              </>
            ) : (
              ""
            )}
          </Stack>
        </Grid>
      </Box>
    </Paper>
  );
}

TalentCard.propTypes = {
  userId: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  image: PropTypes.string,
  job: PropTypes.string,
  motivation: PropTypes.string,
  status: PropTypes.number,
  candidacy: PropTypes.objectOf(PropTypes.number),
  updateCandidacy: PropTypes.func,
};

TalentCard.defaultProps = {
  userId: null,
  firstName: "",
  lastName: "",
  image: "",
  job: "",
  motivation: "",
  status: null,
  candidacy: {},
  updateCandidacy: () => {},
};
