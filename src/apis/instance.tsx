import axios from 'axios';

const config = {
  baseURL: 'https://www.googleapis.com/calendar/v3/calendars/',
};
export const instance = axios.create(config);

// 토큰 만료 시 토큰 재요청 구현해야함
