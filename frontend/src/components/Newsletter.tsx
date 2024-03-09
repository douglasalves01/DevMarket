import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonSecondary from './ButtonSecondary';
import TextField from '@mui/material/TextField';

export default function Newsletter() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '4rem',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Russo One',
          fontSize: '3rem',
          lineHeight: '57.6px',
          marginBottom: '20px',
        }}
      >
        Headine de tamanho médio vai aqui
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Quicksand',
          fontSize: '1.25rem',
          lineHeight: '27px',
          marginBottom: '20px',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
        tortor magna, luctus venenatis magna pretium et.
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          margin="normal"
          InputProps={{
            sx: {
              borderRadius: '10px',
              width: '500px',
              height: '50px',
              marginRight: '10px',
              border: '1px solid #252525',
            },
          }}
        />
        <ButtonSecondary texto="Cadastrar" />
      </Box>
      <Typography
        sx={{
          fontFamily: 'Roboto',
          fontSize: '.8rem',
          lineHeight: '18px',
          marginBottom: '2rem',
        }}
      >
        Ao clicar em Cadastrar você confirma que concorda com nossos Termos e
        Condições.
      </Typography>
    </Box>
  );
}
