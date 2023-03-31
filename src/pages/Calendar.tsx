import React from 'react';
import GoogleCalendar from 'components/Calendar/GoogleCalendar';
import styled from '@emotion/styled';
import Modal from 'components/share/Modal';
import { useRecoilState } from 'recoil';
import { modalAtom } from 'state/atoms';
import CalendarModal from '../components/Calendar/Modal/share/CalendarModal';

function Calendar() {
  const [isOpen, setIsOpen] = useRecoilState(modalAtom);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Container>
        <GoogleCalendar />
      </Container>
      <Modal open={isOpen} onClose={handleClose}>
        <CalendarModal />
      </Modal>
    </>
  );
}

export default Calendar;

const Container = styled('section')`
  width: 80%;
  /* min-height: 700px; */
`;
