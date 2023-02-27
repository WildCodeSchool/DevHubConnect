import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Typography from "@mui/material/Typography";

export default function MyCalendar() {
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        My Calendar
      </Typography>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </div>
  );
}
