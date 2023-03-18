import dayjs from 'dayjs';
import { GoogleEvents } from 'types';
import { EventInstance } from '../Eventinstance';

async function getEventAPI(selectedDateAtom: string): Promise<GoogleEvents> {
  const day = dayjs(selectedDateAtom);
  const timeMin = day.toISOString();
  const timeMax = day.endOf('day').toISOString();
  const params = {
    timeMin,
    timeMax,
    orderBy: 'startTime',
    singleEvents: true,
  };
  try {
    const response = await EventInstance.get('/', {
      params,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default getEventAPI;
