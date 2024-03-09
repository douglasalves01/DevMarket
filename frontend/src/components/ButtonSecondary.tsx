import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface ButtonPrimaryProps {
  texto: string;
}
const ColorButton = styled(Button)<ButtonProps>(() => ({
  background: '#FFF',
  borderRadius: '15px',
  width: '130px',
  height: '50px',
  color: '#252525',
  border: '1px solid #252525',
  '&:hover': {
    background: 'inherit', // Remove o efeito de hover
  },
}));

export default function ButtonSecondary({ texto }: ButtonPrimaryProps) {
  return (
    <Stack spacing={2} direction="row">
      <ColorButton
        variant="contained"
        sx={{ fontFamily: 'Quicksand', lineHeight: '24px', fontWeight: '700' }}
      >
        {texto}
      </ColorButton>
    </Stack>
  );
}
