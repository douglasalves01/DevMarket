import { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

interface Product {
  image: string;
  valor: string;
  produto: string;
  quantity: string;
}
interface Cart {
  cartItem: string[];
  onUpdateTotalPrice: (parametro1: number) => number;
}
export default function ProductCartItem({
  cartItem,
  onUpdateTotalPrice,
}: Cart) {
  // Estado para armazenar as informações dos produtos
  const [productInfo, setProductInfo] = useState<{ [key: string]: Product }>(
    {}
  );
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Função para fazer a solicitação GET para a rota /product/:id
    const fetchProductInfo = async (id: string) => {
      try {
        const response = await axios.get(`http://localhost:3000/product/${id}`);
        if (response.status === 200) {
          setProductInfo((prevProductInfo) => ({
            ...prevProductInfo,
            [id]: {
              ...response.data.data,
              quantity: cartItem.filter((itemId: string) => itemId === id)
                .length,
            },
          }));
        } else {
          console.error(`Erro ao obter informações do produto com o ID ${id}`);
        }
      } catch (error) {
        console.error(`Erro ao fazer solicitação para o servidor: ${error}`);
      }
    };

    // Para cada ID em cartItem, fazer uma solicitação GET para obter as informações do produto
    cartItem.forEach((id: string) => {
      fetchProductInfo(id);
    });
  }, [cartItem]);
  useEffect(() => {
    let total = 0;
    Object.values(productInfo).forEach((productData) => {
      total += parseFloat(productData.valor) * parseFloat(productData.quantity);
    });
    setTotalPrice(total);
    onUpdateTotalPrice(total);
  }, [productInfo]);
  // Função para renderizar os produtos

  return Object.entries(productInfo).map(([id, productData]) => (
    <Box key={id} sx={{ display: 'flex', padding: '1rem' }}>
      <CardMedia
        sx={{
          width: '100px',
          height: { md: '50px', xl: '80px' },
          border: '1px solid #E4E7E9',
        }}
        component="img"
        image={productData.image}
      />

      <Box sx={{ marginLeft: '10px' }}>
        <Typography
          sx={{
            fontFamily: 'Public Sans',
            fontSize: '14px',
            lineHeight: '20px',
          }}
        >
          {productData.produto}
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Typography
            sx={{
              marginRight: '5px',
              fontFamily: 'Public Sans',
              fontSize: '14px',
              lineHeight: '20px',
              color: '#5F6C72',
            }}
          >
            {productData.quantity} x
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Public Sans',
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '20px',
              color: '#BA3C3D',
            }}
          >
            {parseFloat(productData.valor).toFixed(2)}
          </Typography>
        </Box>
      </Box>
    </Box>
  ));
}
