import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
export default function HeaderFilter() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: { md: '3rem', xl: '4.5rem' },
          width: '100%',
        }}
      >
        <Typography
          sx={{
            marginRight: '15%',
            fontFamily: 'Russo One',
            fontSize: { md: '35px', xl: '48px' },
            lineHeight: '57.6px',
          }}
        >
          Produtos
        </Typography>
        <Search sx={{ flexGrow: 1.5, background: '#FFFFFF' }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            sx={{ flexGrow: 1.5, width: '85%', border: '1px solid #E4E7E9' }}
            placeholder="Buscar..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '-8%',
          }}
        >
          <Typography
            sx={{
              marginRight: '20px',
              fontFamily: 'Public Sans',
              fontSize: '16px',
              lineHeight: '20px',
              color: '#191C1F',
            }}
          >
            Ordenar por:{' '}
          </Typography>
          <Select
            sx={{ width: '200px' }}
            disabled={false}
            placeholder="Choose one…"
            size="md"
            defaultValue="popular"
          >
            <Option value="popular">Mais popular</Option>
            <Option value="maisVendido">Mais vendido</Option>
          </Select>
        </Box>
      </Box>
    </>
  );
}
