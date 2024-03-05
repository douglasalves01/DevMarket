import Box from '@mui/material/Box';
import ButtonPrimary from './ButtonPrimary';
import Typography from '@mui/material/Typography';

export default function Introduction() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: { md: '500px', xl: '720px' },
            maxWidth: '720px',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: '#252525',
              fontSize: { md: '2.5rem', xl: '3.5rem' },
              marginBottom: '1.2rem',
            }}
          >
            Uma headline de tamanho médio
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#252525',
              fontSize: { md: '1rem', xl: '1.4rem' },
              marginBottom: '1.5rem',
            }}
          >
            Praesent a cursus urna. Pellentesque vitae dignissim felis.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Cras efficitur ac risus non vulputate.
          </Typography>
          <ButtonPrimary texto="Comece a olhar" />
        </Box>
      </Box>
      <Box sx={{ width: '50%', height: '100%' }}>
        <img
          style={{ width: '100%', height: '100%' }}
          src={`https://images.unsplash.com/photo-1606223226391-c267641c318c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        />
      </Box>
    </Box>
  );
}
