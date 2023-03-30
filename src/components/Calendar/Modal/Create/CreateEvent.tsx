import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedDateAtom, modalAtom } from 'state/atoms';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { PostEventInstance } from 'apis/event/PostEventInstance';
import { Event } from '../../../../types';
import { isLoadingAtom } from '../../../../state/atoms';

function CreateEvent() {
  const date = useRecoilValue(selectedDateAtom);
  const isOpen = useSetRecoilState(modalAtom);
  const [summary, setSummary] = useState<string>('');
  const [start, setStart] = useState<Dayjs | null>(dayjs(date).startOf('hour'));
  const [end, setEnd] = useState<Dayjs | null>(
    dayjs(date).startOf('hour').add(1, 'hour'),
  );
  const setIsLoading = useSetRecoilState(isLoadingAtom);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
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
    PostEventInstance.post(`/`, body).then((response) => {
      setIsLoading(false);
    });

    isOpen(false);
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
    <Form onSubmit={submitHandler}>
      <TextField
        onChange={handleSummaryChange}
        name="summary"
        value={summary}
        required
        id="standard-required"
        label="New Event"
        variant="standard"
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
          <DateTimePicker
            label="start"
            value={start}
            onChange={handleStartChange}
          />
          <DateTimePicker label="end" value={end} onChange={handleEndChange} />
        </DemoContainer>
      </LocalizationProvider>
      <StyledButton type="submit" variant="contained" color="info">
        Add Event
      </StyledButton>
    </Form>
  );
}

export default CreateEvent;

const StyledButton = styled(Button)({
  marginTop: '20px',
  backgroundColor: '#5971ec',
  boxShadow: 'none',
  fontWeight: '500',
  fontSize: '20px',
  '&:hover': {
    backgroundColor: 'tomato',
    boxShadow: 'none',
  },
});

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
});
