import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { selectedDateAtom } from 'state/atoms';
import CreateEvent from './CreateEvent';
import ListEvent from './ListEvent';

interface PropsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function CalendarModal({ isOpen, setIsOpen }: PropsType) {
  const [isCreate, setIsCreate] = useState(false);
  const date = useRecoilValue(selectedDateAtom);

  const clickHandler = () => {
    setIsCreate(!isCreate);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          bgcolor: '#fff',
          width: 400,
          height: 500,
          p: 2,
        }}
      >
        <div>{date}</div>
        <button type="button" onClick={clickHandler}>
          {isCreate ? 'list' : 'create'}
        </button>
        {isCreate ? <CreateEvent /> : <ListEvent />}
      </Box>
    </Modal>
  );
}

export default CalendarModal;
