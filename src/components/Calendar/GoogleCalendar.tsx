import React, { useState } from 'react';
import CalendarReact from '@fullcalendar/react'; // fullCalendar
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import { useSetRecoilState } from 'recoil';
import { selectedDateAtom } from 'state/atoms';
import CalendarModal from './CalendarModal';

export default function GoogleCalendar() {
  const [isOpen, setIsOpen] = useState(false);
  const setDate = useSetRecoilState(selectedDateAtom);

  const handleDateSelect = (arg: any) => {
    setDate(arg.startStr);
    setIsOpen(true);
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
      <CalendarModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
