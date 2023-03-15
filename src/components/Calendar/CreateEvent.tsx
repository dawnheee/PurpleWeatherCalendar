import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useRecoilValue } from 'recoil';
import { selectedDateAtom } from 'state/atoms';
import postEventAPI from 'apis/event/postEventAPI';
import { Event } from '../../types';

function CreateEvent() {
  const date = useRecoilValue(selectedDateAtom);
  const [summary, setSummary] = useState<string>('');
  const [start, setStart] = useState<Dayjs | null>(dayjs(date).startOf('hour'));
  const [end, setEnd] = useState<Dayjs | null>(
    dayjs(date).startOf('hour').add(1, 'hour'),
  );

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body: Event = {
      summary,
      start: {
        dateTime: start!.format('YYYY-MM-DDTHH:mm:ss'),
        timeZone: 'Asia/Seoul',
      },
      end: {
        dateTime: end!.format('YYYY-MM-DDTHH:mm:ss'),
        timeZone: 'Asia/Seoul',
      },
    };
    postEventAPI(body);
  };

  const handleSummaryChange: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setSummary(e.target.value);
  };
  const handleStartChange = (newValue: Dayjs | null) => {
    setStart(newValue);
  };
  const handleEndChange = (newValue: Dayjs | null) => {
    setEnd(newValue);
  };

  return (
    <>
      <div>CreateEvent</div>
      <form onSubmit={submitHandler}>
        <label htmlFor="summary">
          <input
            onChange={handleSummaryChange}
            id="summary"
            name="summary"
            value={summary}
          />
        </label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
            <DateTimePicker
              label="start"
              value={start}
              onChange={handleStartChange}
            />
            <DateTimePicker
              label="end"
              value={end}
              onChange={handleEndChange}
            />
          </DemoContainer>
        </LocalizationProvider>
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default CreateEvent;
