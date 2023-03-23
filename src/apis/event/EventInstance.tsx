import axios, {
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from 'axios';

const config = {
  baseURL: `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_GOOGLE_CALENDAR_ID}/events`,
};

export const EventInstance = axios.create(config);

interface InternalAxiosRequestConfig<T> extends AxiosRequestConfig<T> {
  retry?: boolean;
  headers: AxiosRequestHeaders;
}

// 인터셉터 만들기
EventInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig<any>;
    // 리프레시 토큰 만료 시 로그아웃시킴

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
          console.log('토큰 갱신');

          // headers 대신 config.headers에 새로운 access token 값을 설정
          EventInstance.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`;
          console.log('새토큰 장착');
          return EventInstance(originalRequest);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return Promise.resolve();
  },
);

// 모든 요청에 대해 access token 값을 설정
EventInstance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
  'access_token',
)}`;
