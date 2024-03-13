import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import RadioButton from '../filters/RadioButton';
import Range from '../filters/Range';
import Grid from '@mui/material/Grid';
import CheckboxCategory from '../filters/CheckboxCategory';
export default function FilterProducts() {
  return (
    <>
      <Box sx={{ padding: '1rem 2rem' }}>
        <RadioButton />
        <Divider sx={{ margin: '1rem 0' }} />
        <Box>
          <Typography
            sx={{
              fontFamily: 'Public Sans',
              fontWeight: '500',
              fontSize: '16px',
              lineHeight: '24px',
              color: '#191C1F',
            }}
          >
            Valor entre
          </Typography>
          <Range />
        </Box>
        <Divider sx={{ margin: '1rem 0' }} />
        <Box>
          <Typography
            sx={{
              fontFamily: 'Public Sans',
              fontWeight: '500',
              fontSize: '16px',
              lineHeight: '24px',
              color: '#191C1F',
              marginBottom: '1rem',
            }}
          >
            Marcas Populares
          </Typography>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={2} sm={2} md={5}>
                <CheckboxCategory colorChecked="#7E5686" texto="Microsoft" />
              </Grid>
              <Grid item xs={2} sm={2} md={5}>
                <CheckboxCategory colorChecked="#7E5686" texto="Google" />
              </Grid>
              <Grid item xs={2} sm={2} md={5}>
                <CheckboxCategory colorChecked="#7E5686" texto="Apple" />
              </Grid>
              <Grid item xs={2} sm={2} md={5}>
                <CheckboxCategory colorChecked="#7E5686" texto="Samsung" />
              </Grid>
              <Grid item xs={2} sm={2} md={5}>
                <CheckboxCategory colorChecked="#7E5686" texto="Dell" />
              </Grid>
              <Grid item xs={2} sm={2} md={5}>
                <CheckboxCategory colorChecked="#7E5686" texto="HP" />
              </Grid>
              <Grid item xs={2} sm={2} md={5}>
                <CheckboxCategory colorChecked="#7E5686" texto="Sony" />
              </Grid>
              <Grid item xs={2} sm={2} md={5}>
                <CheckboxCategory colorChecked="#7E5686" texto="Intel" />
              </Grid>
              <Grid item xs={2} sm={2} md={5}>
                <CheckboxCategory colorChecked="#7E5686" texto="LG" />
              </Grid>
              <Grid item xs={2} sm={2} md={5}>
                <CheckboxCategory colorChecked="#7E5686" texto="One Plus" />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
