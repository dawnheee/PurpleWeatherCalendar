import React from 'react';
import CalendarReact from '@fullcalendar/react'; // fullCalendar
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable

export default function GoogleCalendar() {
  const handleDateSelect = (arg: {}) => {
    console.log('date:', arg);
  };

  return (
    <div className="cal-container">
      <CalendarReact
        plugins={[interactionPlugin, dayGridPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        selectable
        events={{
          googleCalendarId: process.env.REACT_APP_GOOGLE_CALENDAR_ID,
        }}
        googleCalendarApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        eventDisplay="block"
        eventTextColor="white"
        eventColor="mustard"
        height="600px"
        select={handleDateSelect}
      />
    </div>
  );
}
