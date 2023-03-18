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
      sx={{ transform: 'rotate(45deg)' }}
      onClick={onClick}
    >
      <AddIcon />
    </Fab>
  );
}

export function CancleButton({ onClick }: ButtonComponentProps) {
  return (
    <Fab color="info" aria-label="add" onClick={onClick}>
      <AddIcon />
    </Fab>
  );
}
