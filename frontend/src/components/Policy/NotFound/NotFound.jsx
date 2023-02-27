import * as React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Image from "mui-image";
import Oops from "../../../assets/oops.jpg";

export default function PageNotFound() {
  return (
    <Stack spacing={2} justifyContent="center" alignItems="center" width="100%">
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="h5" gutterBottomgutterBottom>
        Error 404 - Page not found
      </Typography>
      <Typography>The page you requested could not be found.</Typography>
      <Image
        src={Oops}
        alt="404 not found"
        loading="lazy"
        fit="contain"
        width="50%"
      />
    </Stack>
  );
}
