import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useRecoilValue } from 'recoil';
import { selectedDateAtom } from 'state/atoms';
import postEventAPI from 'apis/event/postEventAPI';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Event } from '../../../../types';

// interface PropsType {
//   setIsCreate: React.Dispatch<React.SetStateAction<boolean>>;
// }
function CreateEvent() {
  const navigate = useNavigate();
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
    navigate('/');
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
        등록
      </StyledButton>
    </Form>
  );
}

export default CreateEvent;

const StyledButton = styled(Button)({
  marginTop: '7px',
});

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '70%',
});
