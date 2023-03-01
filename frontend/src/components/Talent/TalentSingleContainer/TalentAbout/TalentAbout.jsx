import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function TalentAbout() {
  return (
    <Stack spacing={1} sx={{ backgroundColor: "#b2ebf2" }}>
      <Typography variant="h5" sx={{ p: 1, textAlign: "center" }}>
        A PROPOS
      </Typography>
      <Typography
        component="div"
        variant="h2"
        sx={{ p: 1, textAlign: "center" }}
      >
        A PROPOS (Fred Suggest projet)
      </Typography>
      <Typography component="p" variant="body1" sx={{ p: 1 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ipsum,
        vero eius recusandae accusantium quidem nam quis eveniet tempora
        suscipit reiciendis autem aspernatur unde voluptas modi laborum.
        Suscipit, undequia. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Sed, excepturi. Rem itaque neque commodi pariatur illo corrupti
        animi fuga voluptates numquam, eaque, unde ab cum, qui cumque accusamus
        iusto dolores.
      </Typography>
    </Stack>
  );
}

export default TalentAbout;
