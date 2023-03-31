import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedDateAtom, isLoginAtom } from 'state/atoms';
import {
  AddButton,
  CancleButton,
} from 'components/Calendar/Modal/share/Buttons';
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import CreateEvent from '../Create/CreateEvent';
import ListEvent from '../List/ListEvent';
import { TitleBox } from './TextBox';

function CalendarModal() {
  const [isCreate, setIsCreate] = useState(false);
  const [date, setDate] = useRecoilState(selectedDateAtom);
  const isLogin = useRecoilValue(isLoginAtom);

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
          <FaArrowLeft color="#5e86ffc5" />
        </button>
        <TitleBox text={date} />
        <button type="button" onClick={nextDate}>
          <FaArrowRight color="#5e86ffc5" />
        </button>
      </DateButton>
      <Contents>{isCreate ? <CreateEvent /> : <ListEvent />}</Contents>
      {isLogin && (
        <ButtonContainer>
          {isCreate ? (
            <AddButton onClick={clickCreateOrEventHandler} />
          ) : (
            <CancleButton onClick={clickCreateOrEventHandler} />
          )}
        </ButtonContainer>
      )}
    </>
  );
}

export default CalendarModal;

const DateButton = styled('section')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
  button {
    border: 0;
    background-color: transparent;
  }
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
