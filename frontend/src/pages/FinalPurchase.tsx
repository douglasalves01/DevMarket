import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ProductCartItem from '../components/products/ProductCartItem';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckoutForm } from '../services/stripe/CheckForm';

export default function FinalPurchase() {
  const [cartCount, setCartCount] = useState<number>(() => {
    const storedCount = localStorage.getItem('cartCount');
    return storedCount ? parseInt(storedCount, 10) : 0;
  });
  const [cartItems, setCartItems] = useState<string[]>(() => {
    const storedItems = localStorage.getItem('cartItems');
    return storedItems ? JSON.parse(storedItems) : [];
  });
  useEffect(() => {
    localStorage.setItem('cartCount', cartCount.toString());
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartCount, cartItems]);

  const [totalPrice, setTotalPrice] = useState(0);

  const handleTotalPriceUpdate = (newTotalPrice: number) => {
    setTotalPrice(newTotalPrice);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          padding: '2rem',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTMzfHxmdW5kbyUyMHF1YWRyaWN1bGFkYSUyMHB1cnBsZXxlbnwwfHwwfHx8MA%3D%3D)',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '900',
            fontSize: '28.4px',
            lineHeight: '42.75px',
            color: '#000000',
          }}
        >
          Finalizar compra
        </Typography>
        <Box
          sx={{
            width: '660px',
            height: { md: '500px', xl: '680px' },
            marginTop: { md: '.5rem', xl: '1rem' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            flexDirection: 'column',
            borderRadius: '5px',
            background:
              'linear-gradient(108.46deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)',
          }}
        >
          <Box
            sx={{
              background: '#fff',
              width: '80%',
              height: { md: '500px', xl: 'auto' },
              borderRadius: '4px',
              border: '1px solid #E4E7E9',
              padding: { md: '1rem', xl: '1.5rem' },

              marginTop: { md: '1rem', xl: '2.5rem' },
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Public Sans',
                fontWeight: '500',
                fontSize: '18px',
                lineHeight: '24px',
                color: '#191C1F',
              }}
            >
              Resumo do pedido
            </Typography>
            <ProductCartItem
              cartItem={cartItems}
              onUpdateTotalPrice={handleTotalPriceUpdate}
            />
            <Divider sx={{ margin: '1rem 0' }} />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '5px',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Public Sans',
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#5f6C72',
                }}
              >
                Sub-Total
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Public Sans',
                  fontWeight: '500',
                  fontSize: '14px',
                  lineHeight: '20px',
                }}
              >
                R$ {totalPrice.toFixed(2)}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                sx={{
                  fontFamily: 'Public Sans',
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#5f6C72',
                }}
              >
                Entrega
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Public Sans',
                  fontWeight: '500',
                  fontSize: '14px',
                  lineHeight: '20px',
                }}
              >
                grátis
              </Typography>
            </Box>
            <Divider sx={{ margin: '1rem 0' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                sx={{
                  fontFamily: 'Public Sans',
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#191C1F',
                }}
              >
                Total
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Public Sans',
                  fontWeight: '600',
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#191C1F',
                }}
              >
                R$ {totalPrice.toFixed(2)}
              </Typography>
            </Box>
          </Box>
          <Link
            to={'/home'}
            style={{
              textDecoration: 'none',
              marginTop: '2rem',
              marginRight: '24rem',
              fontFamily: 'Poppins',
              fontWeight: '900',
              fontSize: '14px',
              lineHeight: '21px',
              color: '#242424CC',
            }}
          >
            Voltar à página home
          </Link>
        </Box>
      </Box>
      <Box sx={{ width: '50%', height: '100%' }}>
        <CheckoutForm />
      </Box>
    </Box>
  );
}
