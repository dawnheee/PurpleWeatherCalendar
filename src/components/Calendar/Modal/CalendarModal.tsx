import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedDateAtom } from 'state/atoms';
import { AddButton, CancleButton } from 'components/Calendar/Modal/Buttons';
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
import CreateEvent from './Create/CreateEvent';
import ListEvent from './List/ListEvent';
import { TitleBox } from '../../share/TextBox';

function CalendarModal() {
  const [isCreate, setIsCreate] = useState(false);
  const [date, setDate] = useRecoilState(selectedDateAtom);

  const clickCreateOrEventHandler = () => {
    setIsCreate(!isCreate);
  };

  const prevDate = () => {
    setDate(dayjs(date).subtract(1, 'day').format('YYYY-MM-DD'));
  };
  const nextDate = () => {
    setDate(dayjs(date).add(1, 'day').format('YYYY-MM-DD'));
  };
  return (
    <>
      <DateButton>
        <button type="button" onClick={prevDate}>
          전
        </button>
        <TitleBox text={date} />
        <button type="button" onClick={nextDate}>
          ≫
        </button>
      </DateButton>
      <Contents>{isCreate ? <CreateEvent /> : <ListEvent />}</Contents>
      <ButtonContainer>
        {isCreate ? (
          <AddButton onClick={clickCreateOrEventHandler} />
        ) : (
          <CancleButton onClick={clickCreateOrEventHandler} />
        )}
      </ButtonContainer>
    </>
  );
}

export default CalendarModal;

const DateButton = styled('section')`
  display: flex;
`;
const ButtonContainer = styled('section')`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const Contents = styled('section')`
  margin-top: 15px;
  height: 80%;
  justify-content: center;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;
