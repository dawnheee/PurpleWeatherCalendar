import { rejects } from 'assert';
import axios, {
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from 'axios';

const headers = {
  Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  'Content-Type': 'application/json',
};

const config = {
  baseURL: `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_GOOGLE_CALENDAR_ID}/events`,
  headers,
};
export const PostEventInstance = axios.create(config);

//

interface InternalAxiosRequestConfig<T> extends AxiosRequestConfig<T> {
  retry?: boolean;
  headers: AxiosRequestHeaders;
}

PostEventInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig<any>;

    if (error.response?.status === 401 && !originalRequest.retry) {
      originalRequest.retry = true;
      const refreshToken = localStorage.getItem('refresh_token');
      return axios
        .post(
          'https://oauth2.googleapis.com/token?',
          {
            grant_type: 'refresh_token',
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            refresh_token: refreshToken,
            client_secret: process.env.REACT_APP_GOOGLE_SECRETE,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then((response) => {
          localStorage.setItem('access_token', response.data.access_token);
          PostEventInstance.defaults.headers.Authorization = `Bearer ${response.data.access_token}`;

          originalRequest.headers.Authorization = `Bearer ${response.data.access_token}`;

          return PostEventInstance(originalRequest);
        })
        .catch((error) => {
          if (error.response?.status !== 401) {
            console.log(error);
          }
        });
    }
    return Promise.resolve();
  },
);
