import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface ButtonSecondaryProps extends ButtonProps {
  texto: string;
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  border?: string;
  textColor?: string;
}

const ColorButton = styled(Button)<ButtonSecondaryProps>(
  ({ background, borderRadius, border, textColor, height, width }) => ({
    background: background || '#FFF',
    borderRadius: borderRadius || '15px',
    width: width || '130px',
    height: height || '50px',
    color: textColor || '#252525',
    border: border || '1px solid #252525',
    '&:hover': {
      background: background,
    },
  })
);

export default function ButtonSecondary({
  texto,
  width,
  height,
  background,
  borderRadius,
  border,
  textColor,
  ...rest
}: ButtonSecondaryProps) {
  return (
    <Stack spacing={2} direction="row" sx={{ marginTop: '1rem' }}>
      <ColorButton
        sx={{ fontFamily: 'Quicksand', lineHeight: '24px', fontWeight: '700' }}
        width={width}
        height={height}
        background={background}
        borderRadius={borderRadius}
        border={border}
        textColor={textColor}
        texto={texto}
        {...rest}
      >
        {texto}
      </ColorButton>
    </Stack>
  );
}
