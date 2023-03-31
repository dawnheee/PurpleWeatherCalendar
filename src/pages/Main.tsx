import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import LoginModal from 'components/Auth/LoginModal';
import AuthButton from 'components/Auth/AuthButton';
import { useRecoilValue } from 'recoil';
import Calendar from './Calendar';
import Weather from './Weather';
import Modal from '../components/share/Modal';
import { isLoginAtom, isLoadingAtom } from '../state/atoms';

function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const isLogin = useRecoilValue(isLoginAtom);
  const isLoading = useRecoilValue(isLoadingAtom);
  useEffect(() => {
    if (!isLogin) {
      setIsOpen(true);
    }
  }, [isLogin]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <AuthButton />
      <CalendarWeather>
        <Modal open={isOpen} onClose={handleClose}>
          <LoginModal onClose={handleClose} />
        </Modal>
        {!isLoading ? (
          <Calendar />
        ) : (
          <LoadingComponent>LOADING...</LoadingComponent>
        )}
        <Weather />
      </CalendarWeather>
    </Container>
  );
}

export default Main;

const Container = styled('section')`
  display: flex;
  flex-direction: column;
`;
const CalendarWeather = styled('section')`
  display: flex;
  justify-content: space-around;
  min-width: 90vw;
  /* min-height: 700px; */
`;

const LoadingComponent = styled('div')`
  background-color: #ffffff3a;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  font-weight: 600;
`;
