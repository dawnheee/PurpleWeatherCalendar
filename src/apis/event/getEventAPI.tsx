import dayjs from 'dayjs';
import { GoogleEvents } from 'types';
import axios from 'axios';
// import { EventInstance } from './EventInstance';
// google 인증 선택 사항(엑세스 토큰 보내는 인스턴스 사용중)
async function getEventAPI(selectedDateAtom: string): Promise<GoogleEvents> {
  const day = dayjs(selectedDateAtom);
  const timeMin = day.toISOString();
  const timeMax = day.endOf('day').toISOString();
  const params = {
    timeMin,
    timeMax,
    orderBy: 'startTime',
    singleEvents: true,
    key: process.env.REACT_APP_GOOGLE_API_KEY,
  };
  try {
    const response = await axios.get(
      `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_GOOGLE_CALENDAR_ID}/events`,
      {
        params,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default getEventAPI;
