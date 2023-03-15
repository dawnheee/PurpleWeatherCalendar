import axios from 'axios';
import dayjs from 'dayjs';

interface EventData {
  kind: string;
  etag: string;
  summary: string;
  updated: string;
  timeZone: string;
  items: object[];
}

const headers = {
  Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  'Content-Type': 'application/json',
};

async function getEventAPI(selectedDateAtom: string): Promise<EventData> {
  const day = dayjs(selectedDateAtom);
  const timeMin = day.toISOString();
  const timeMax = day.endOf('day').toISOString();
  const params = {
    timeMin,
    timeMax,
  };
  try {
    const response = await axios.get(
      `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_GOOGLE_CALENDAR_ID}/events`,
      {
        headers,
        params,
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default getEventAPI;
