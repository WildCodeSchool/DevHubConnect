import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function UserDashboardCalendar() {
  return (
    <Paper sx={{ width: 1, padding: 2 }}>
      <Box component="span" sx={{ width: 1 }}>
        <FullCalendar
          plugins={[daygridPlugin]}
          events={[
            { title: "event 1", date: "2023-02-20" },
            { title: "event 2", date: "2023-02-30" },
          ]}
        />
      </Box>
    </Paper>
  );
}
