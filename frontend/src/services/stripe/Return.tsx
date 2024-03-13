import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
export const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');

    fetch(`http://localhost:3000/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);
  useEffect(() => {
    if (status === 'complete') {
      localStorage.removeItem('cartCount');
      localStorage.removeItem('cartItems');
    }
  }, [status]);
  if (status === 'open') {
    return <Navigate to="/checkout" />;
  }

  if (status === 'complete') {
    return (
      <section id="success">
        <NavBar />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '4rem',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '900',
              fontSize: '40px',
              lineHeight: '42.75px',
              color: '#000',
              marginBottom: '1rem',
            }}
          >
            Obrigado pela sua compra!
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Public Sans',
              fontSize: '18px',
              lineHeight: '20px',
              color: '#5F6C72',
            }}
          >
            O seu pedido foi aceito e está sendo processado. Você irá receber
            uma notificação com os detalhes do pedido no seu e-mail
          </Typography>
          <Link
            to="/home"
            style={{
              textDecoration: 'none',
              marginTop: '2rem',
              marginBottom: '1rem',
              fontFamily: 'Poppins',
              fontWeight: '900',
              fontSize: '14px',
              lineHeight: '21px',
              color: '#242424CC',
            }}
          >
            Voltar para a Home
          </Link>
        </Box>
      </section>
    );
  }

  return null;
};
