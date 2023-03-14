import React from 'react';
import axios from 'axios';

function PostEvent() {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    'Content-Type': 'application/json',
  };

  const body = {
    summary: '테스트',
    start: {
      dateTime: '2023-03-20T12:00:00',
      timeZone: 'Asia/Seoul',
    },
    end: {
      dateTime: '2023-03-20T20:00:00',
      timeZone: 'Asia/Seoul',
    },
  };

  const handler = () => {
    axios
      .post(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_GOOGLE_CALENDAR_ID}/events`,
        body,
        { headers },
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <button type="button" onClick={handler}>
      dd
    </button>
  );
}

export default PostEvent;
