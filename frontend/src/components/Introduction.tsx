import Box from '@mui/material/Box';

export default function Introduction() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        background: 'yellow',
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
        This Box renders as an HTML section element.
      </Box>
      <Box sx={{ width: '50%' }}>
        This Box renders as an HTML section element.
      </Box>
    </Box>
  );
}
