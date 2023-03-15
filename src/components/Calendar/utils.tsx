import { useRecoilValue } from 'recoil';
import { selectedDateAtom } from 'state/atoms';
import dayjs from 'dayjs';

const day = dayjs(useRecoilValue(selectedDateAtom));
export const timeMin = day.format('YYYY-MM-DDTHH:mm:ss');
export const timeMax = day.endOf('day').format('YYYY-MM-DDTHH:mm:ss');
