import React, { useState } from 'react';
import CalendarReact from '@fullcalendar/react'; // fullCalendar
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import { useSetRecoilState } from 'recoil';
import { selectedDateAtom, modalAtom } from 'state/atoms';
import styled from '@emotion/styled';

export default function GoogleCalendar() {
  const setDate = useSetRecoilState(selectedDateAtom);
  const setIsOpen = useSetRecoilState(modalAtom);

  const handleDateSelect = (arg: any) => {
    setDate(arg.startStr);
    setIsOpen(true);
  };

  return (
    <CalendarContainer>
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
        height="650px"
        select={handleDateSelect}
      />
    </CalendarContainer>
  );
}

const CalendarContainer = styled('div')`
  background-color: #ffffffa7;
  border: 1px solid #ccc;
  border-radius: 10px;
`;
