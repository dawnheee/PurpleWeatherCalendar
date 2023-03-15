import React from 'react';
import postEventAPI from 'apis/event/postEventAPI';
import { Event } from '../types';

function PostEvent() {
  const body: Event = {
    summary: '테스트',
    start: {
      dateTime: '2023-03-23T12:00:00',
      timeZone: 'Asia/Seoul',
    },
    end: {
      dateTime: '2023-03-23T20:00:00',
      timeZone: 'Asia/Seoul',
    },
  };
  const postHandler = () => {
    postEventAPI(body);
  };

  return (
    <button type="button" onClick={postHandler}>
      eventPost
    </button>
  );
}

export default PostEvent;
