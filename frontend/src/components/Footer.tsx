import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        height: { md: '200px', xl: '300px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: '#252525',
          fontSize: { md: '1.8rem', xl: '2.5rem' },
          fontFamily: 'RussoOne',
          lineHeight: '48px',
          marginBottom: '2rem',
        }}
      >
        DevMarket
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Typography
          variant="h5"
          sx={{
            color: '#252525',
            fontSize: { md: '.85rem', xl: '1rem' },
            fontFamily: 'Quicksand',
            fontWeight: '700',
            marginRight: '20px',
            lineHeight: '24px',
          }}
        >
          Home
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: '#252525',
            fontSize: { md: '.85rem', xl: '1rem' },
            fontFamily: 'Quicksand',
            fontWeight: '700',
            lineHeight: '24px',
          }}
        >
          Contato
        </Typography>
      </Box>
      <Box
        sx={{
          width: '90%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '1.5rem',
          paddingTop: '1rem',
          borderTop: '1px solid #252525',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: '#000000',
            fontSize: { md: '.75rem', xl: '.9rem' },
            fontFamily: 'Quicksand',
            fontWeight: '500',
            marginRight: '20px',
          }}
        >
          Termos de privacidade
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: '#000000',
            fontSize: { md: '.75rem', xl: '.9rem' },
            fontFamily: 'Quicksand',
            fontWeight: '500',
            marginRight: '20px',
          }}
        >
          Termos de serviço
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: '#000000',
            fontSize: { md: '.75rem', xl: '.9rem' },
            fontFamily: 'Quicksand',
            fontWeight: '500',
          }}
        >
          Configurações de cookies
        </Typography>
      </Box>
    </Box>
  );
}
export default Footer;
