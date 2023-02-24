import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";

export default function MyCalendar() {
  return (
    <div>
      <FullCalendar plugins={[daygridPlugin]} />
    </div>
  );
}
