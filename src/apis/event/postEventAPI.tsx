import axios from 'axios';
import { Event } from '../../types';

const headers = {
  Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  'Content-Type': 'application/json',
};

function postEventAPI(body: Event) {
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
}

export default postEventAPI;
