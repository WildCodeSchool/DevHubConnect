import * as React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Box from "@mui/material/Box";

export default function MyCalendar() {
  return (
    <Box sx={{ width: "100%", background: "#FFF", padding: 3 }}>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </Box>
  );
}
