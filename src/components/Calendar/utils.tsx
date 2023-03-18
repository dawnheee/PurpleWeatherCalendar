import dayjs from 'dayjs';
import 'dayjs/locale/ko';

export const convertDateForm = (dateTime: string) => {
  return dayjs(dateTime).locale('ko').format('MM.DD HH:mm');
};
