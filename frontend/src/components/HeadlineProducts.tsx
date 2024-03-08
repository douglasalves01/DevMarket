import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
export default function HeadlineProducts() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '88%',
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            fontSize: '1rem',
            lineHeight: '24px',
            fontFamily: 'Quicksand',
            fontWeight: '400',
          }}
        >
          OFERTAS E PROMOÇÕES
        </Typography>
        <Typography
          sx={{
            fontSize: '3rem',
            lineHeight: '57.6px',
            fontFamily: 'Russo One',
          }}
        >
          Produtos
        </Typography>
        <Typography
          sx={{
            fontSize: '1.125',
            lineHeight: '27px',
            fontFamily: 'Quicksand',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Box>
    </Box>
  );
}
