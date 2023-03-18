import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import LoginModal from 'components/share/LoginModal';
import Calendar from './Calendar';
import Weather from './Weather';
import Modal from '../components/share/Modal';

function Main() {
  const [isOpen, setIsOpen] = useState(false); // 전역 리코일 상태랑 공유하지 않음

  useEffect(() => {
    const user = localStorage.getItem('loginData');
    const token = localStorage.getItem('access_token');

    if (user === null || token === undefined) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <Modal open={isOpen} onClose={handleClose}>
        <LoginModal onClose={handleClose} />
      </Modal>

      <Calendar />
      <Weather />
    </Container>
  );
}

export default Main;

const Container = styled('section')`
  display: flex;
  justify-content: space-around;
  min-width: 100vw;
`;
