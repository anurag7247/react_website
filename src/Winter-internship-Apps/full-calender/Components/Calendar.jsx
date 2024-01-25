
import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';



const Calendar = ({ resources, events }) => {
  const calendarRef = useRef(null);

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, resourceTimeGridPlugin]}
      initialView="resourceTimeGridDay"
      resources={resources}
      events={events}
      allDaySlot={false}
      editable={true}
      eventOverlap={true}
      slotMinTime="10:00:00"
      slotMaxTime="23:00:00"
      eventBackgroundColor="grey"
      eventTextColor="white"
      eventBorderColor="black"
      displayEventTime={true}
    />
    
  );
};

export default Calendar;
