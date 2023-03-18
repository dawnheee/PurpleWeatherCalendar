import React from 'react';
import { Modal, Box, ModalProps } from '@mui/material';
import { styled } from '@mui/material/styles';

function ModalComponent(props: ModalProps) {
  const { children, open, onClose } = props;
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        outline: 'none',
      }}
    >
      <BoxContainer
        sx={{
          bgcolor: '#fff',
          width: 350,
          height: 500,
          p: 2,
          position: 'relative',
        }}
      >
        {children}
      </BoxContainer>
    </Modal>
  );
}

export default ModalComponent;

const BoxContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  alignItems: 'center',
});
