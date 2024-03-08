import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface ButtonPrimaryProps {
  texto: string;
}
const ColorButton = styled(Button)<ButtonProps>(() => ({
  background: 'linear-gradient(264.91deg, #7E5686 2.91%, #A5AAD9 98.68%)',
  borderRadius: '15px',
  width: '185px',
  height: '50px',
}));

export default function ButtonPrimary({ texto }: ButtonPrimaryProps) {
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
