import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";

export default function UserDashboardCalendar() {
  return <FullCalendar plugins={[daygridPlugin]} />;
}
