import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

interface ButtonComponentProps {
  onClick: () => void;
}

export function AddButton({ onClick }: ButtonComponentProps) {
  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{
        transform: 'rotate(45deg)',
        boxShadow: 'none',
        backgroundColor: '#7A8EF1',
        '&:hover': {
          backgroundColor: '#7a8ef1a4',
        },
      }}
      onClick={onClick}
    >
      <AddIcon />
    </Fab>
  );
}

export function CancleButton({ onClick }: ButtonComponentProps) {
  return (
    <Fab
      color="info"
      aria-label="add"
      onClick={onClick}
      sx={{
        boxShadow: 'none',
        backgroundColor: '#7A8EF1',
        '&:hover': {
          backgroundColor: '#7a8ef1a4',
        },
      }}
    >
      <AddIcon />
    </Fab>
  );
}
