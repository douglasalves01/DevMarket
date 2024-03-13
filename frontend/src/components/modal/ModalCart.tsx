import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ButtonSecondary from '../buttons/ButtonSecondary';
import Modal from '@mui/material/Modal';
import ProductCartItem from '../products/ProductCartItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ModalCart {
  open: void;
  handleClose: void;
  cartCount: string | number;
  cartItem: Array<string>;
}
const ModalCart = ({ open, handleClose, cartCount, cartItem }: ModalCart) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const handleTotalPriceUpdate = (newTotalPrice: number) => {
    setTotalPrice(newTotalPrice);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-avaliate-title"
      aria-describedby="modal-avaliate-description"
      BackdropProps={{ sx: { backgroundColor: 'transparent' } }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: { md: '7%', xl: '6.8%' },
          right: '8%',
          bgcolor: 'background.paper',
          width: '376px',
          height: 'auto',
          padding: '1rem 1rem',
          borderRadius: '4px',
          border: '1px solid #E4E7E9',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              fontFamily: 'Public Sans',
              fontSize: '1rem',
              lineHeight: '24px',
              color: '#191C1F',
              marginBlock: '1rem',
            }}
          >
            Carrinho de compras
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Public Sans',
              fontSize: '1rem',
              fontWeight: '500',
              lineHeight: '24px',
              color: '#5F6C72',
            }}
          >
            ({cartCount})
          </Typography>
        </Box>
        <Divider />
        <ProductCartItem
          cartItem={cartItem}
          onUpdateTotalPrice={handleTotalPriceUpdate}
        />
        <Divider sx={{ margin: '1rem 0' }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            sx={{
              fontFamily: 'Public Sans',
              fontSize: '14px',
              lineHeight: '20px',
              color: '#475156',
            }}
          >
            Sub-Total:
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Public Sans',
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '20px',
              color: '#191C1F',
            }}
          >
            R$ {totalPrice.toFixed(2)}
          </Typography>
        </Box>
        <Link to="/purchase" style={{ textDecoration: 'none' }}>
          <ButtonSecondary
            sx={{
              fontFamily: 'Public Sans',
              fontWeight: '700',
              fontSize: '14px',
              lineHeight: '48px',
            }}
            texto="FINALIZAR A COMPRA ->"
            background="#7E5686"
            width="100%"
            height="48px"
            borderRadius="2px"
            border="none"
            textColor="#ffffff"
          />
        </Link>
      </Box>
    </Modal>
  );
};

export default ModalCart;
