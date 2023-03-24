import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import LoginModal from 'components/share/LoginModal';
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
    <>
      {!isLoading ? (
        <Container>
          <AuthButton />
          <CalendarWeather>
            <Modal open={isOpen} onClose={handleClose}>
              <LoginModal onClose={handleClose} />
            </Modal>
            <Calendar />
            {/* <Weather /> */}
          </CalendarWeather>
        </Container>
      ) : (
        <div>loading...</div>
      )}{' '}
    </>
  );
}

export default Main;

const CalendarWeather = styled('section')`
  display: flex;
  justify-content: space-around;
  min-width: 100vw;
`;

const Container = styled('section')`
  display: flex;
  flex-direction: column;
`;
