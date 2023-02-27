import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function UserDashboardCalendar() {
  return (
    <Paper sx={{ width: 1, p: 2 }}>
      <Box component="span" sx={{ width: 1 }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: "event 1", date: "2023-02-20" },
            { title: "event 2", date: "2023-02-30" },
          ]}
        />
      </Box>
    </Paper>
  );
}
