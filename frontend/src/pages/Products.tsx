import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import CardProduct from '../components/products/CardProduct';
import FilterProducts from '../components/products/FilterProducts';
import HeaderFilter from '../components/filters/HeaderFilter';

interface Product {
  _id: string;
  id: string;
  produto: string;
  categoria: string;
  image: string;
  valor: string;
}

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/all`)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          const responseData = response.data.data;
          const productsData = responseData.map((item: Product) => ({
            id: item._id,
            produto: item.produto,
            categoria: item.categoria,
            image: item.image,
            valor: item.valor,
          }));
          setProducts(productsData);
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%',
          marginLeft: '4rem',
        }}
      >
        <HeaderFilter />
      </Box>
      <Box sx={{ display: 'flex', marginTop: '2rem' }}>
        <Box sx={{ width: { md: '32%', xl: '20%' } }}>
          <FilterProducts />
        </Box>
        <Box>
          <Grid container spacing={2}>
            {products.map((item: Product) => (
              <Grid key={item.id} item xs={12} sm={6} md={4}>
                <CardProduct
                  id={item.id}
                  product={item.produto}
                  image={item.image}
                  category={item.categoria}
                  price={item.valor}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
