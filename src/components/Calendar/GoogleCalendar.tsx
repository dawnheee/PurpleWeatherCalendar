import React, { useState } from 'react';
import CalendarReact from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import interactionPlugin from '@fullcalendar/interaction';
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
        eventColor="#5e86ffc5"
        height="650px"
        select={handleDateSelect}
      />
    </CalendarContainer>
  );
}

const CalendarContainer = styled('div')`
  background-color: #ffffff3a;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  height: auto;
  .fc-toolbar-title {
    //연 월
    color: white;
    font-size: 40px;
    text-shadow: -2px 0 tomato, 0 2px tomato, 2px 0 tomato, 0 -2px tomato;
  }
  .fc-col-header-cell {
    //요일
    color: white;
    font-weight: 700;
    font-size: large;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
  .fc-daygrid-day-number {
    color: white;
    font-size: larger;
  }
  .fc-daygrid-day-events {
    font-weight: 500;
    font-size: 18px;
  }
  .fc-button {
    background-color: #5e86ff92;
    border: none;
    color: white;
    :hover {
      background-color: #ffffff88;
    }
  }
  .fc-today-button.fc-button.fc-button-primary {
    //버튼
    background-color: tomato;
    color: #ffffff;
    font-weight: 700;
    :hover {
      background-color: #ffffff;
      color: tomato;
    }
  }
  .fc-highlight {
    //선택된 날짜
    background-color: #ffa07a75;
  }
  .fc-day-today {
    // 오늘
    background: #ffffff4e !important;
    color: #5e86ff92;
  }
  .fc-day-today .fc-daygrid-day-number {
    text-shadow: -3px 0 tomato, 0 3px tomato, 3px 0 tomato, 0 -3px tomato;
  }
`;
