// import * as React from "react";
// import Button from "@mui/material/Button";
// // import ButtonGroup from "@mui/material/ButtonGroup";
// import Box from "@mui/material/Box";
// import { IconButton } from "@mui/material";
// import GoogleIcon from '@mui/icons-material/Google';

// // const buttons = [
// //   <Button key="one">Sign in with Google</Button>,
// //   <Button key="two">Sign in with Github</Button>,
// // ];

// export default function GroupOrientation() {
//   return (
//     <Box>
//       {/* <ButtonGroup
//         orientation="vertical"
//         aria-label="vertical outlined button group"
//       >
//         {buttons}
//       </ButtonGroup> */}
//       {/* <ButtonGroup
//         orientation="vertical"
//         aria-label="vertical contained button group"
//         variant="contained"
//       >
//         {buttons}
//       </ButtonGroup> */}
//       {/* <IconButton color="primary">
//         <WhatshotIcon fontSize="large" />
//       </IconButton> */}
//       {/* <Button color="primary" size="large" startIcon={<WhatshotIcon />}>
//         New and Hot
//       </Button> */}

//       {/* <ButtonGroup
//         orientation="vertical"
//         aria-label="vertical contained button group"
//         variant="text"
//       >
//         {buttons}
//       </ButtonGroup> */}
//     </Box>
//   );
// }

import IconButton from "@mui/material/IconButton";
import GoogleIcon from "@mui/icons-material/Google";
import SaveIcon from "@mui/icons-material/Save";
import { Button } from "@mui/material";

export default function GoogleButton() {
  return (
    <div>
      <Button startIcon={<SaveIcon />}>Save</Button>
      <IconButton>
        <GoogleIcon />
      </IconButton>
    </div>
  );
}
