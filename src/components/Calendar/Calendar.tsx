import moment from "moment";
import * as React from "react";

import { SCalendar } from "./styles";

import { momentLocalizer, Event } from "react-big-calendar";

const localizer = momentLocalizer(moment);

interface CalendarProps {
  events?: Event[];
  onSelectEvent?: (event: Event) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
  events,
  onSelectEvent,
}) => {
  return (
    <SCalendar
      popup
      popupOffset={{ x: -10, y: -20 }}
      events={events}
      localizer={localizer}
      onSelectEvent={onSelectEvent}
      defaultDate={new Date(2015, 3, 1)}
    />
  );
};
