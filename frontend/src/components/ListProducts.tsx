import Slider from 'react-slick';
import CardProduct from './CardProduct';
import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Product {
  _id: string;
  id: string;
  produto: string;
  categoria: string;
  image: string;
  valor: string;
}
interface Category {
  categoria: string;
}
export default function ListProducts({ categoria }: Category) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const [products, setProducts] = useState([]);
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

        const filteredProducts = categoria
          ? productsData.filter(
              (product: Product) => product.categoria === categoria
            )
          : productsData;
        setProducts(filteredProducts);
      }
    });

  const sliderStyle = {
    width: '85%',
    margin: '0 auto',
    marginTop: '1rem',
  };
  // Estilos inline para os slides
  const slideStyle = {
    padding: '0 10px', // Espaçamento entre os slides
  };
  const navButtonStyle = {
    color: '#7E5686', // Defina a cor desejada
    fontSize: '2rem',
    marginRight: '-20px',
    display: 'none',
  };
  const categoriaTitle = categoria.charAt(0).toUpperCase() + categoria.slice(1);

  return (
    <Box sx={{ flexGrow: 1, marginTop: '1rem' }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          textAlign: 'center',
          fontFamily: 'Public Sans',
          fontSize: '2rem',
          lineHeight: '40px',
          fontWeight: '600',
        }}
      >
        {categoriaTitle}
      </Typography>
      <div className="slider-container" style={sliderStyle}>
        <Slider {...settings}>
          {products.map((item: Product) => (
            <div key={item.id} className="custom-card" style={slideStyle}>
              <CardProduct
                id={item.id}
                product={item.produto}
                image={item.image}
                category={item.categoria}
                price={item.valor}
              />
            </div>
          ))}
        </Slider>
        <style>{`
        .slick-prev:before, .slick-next:before {
          color: ${navButtonStyle.color};
          font-size:${navButtonStyle.fontSize};          
        }
        .slick-prev:before{
          margin:${navButtonStyle.marginRight};
       
        }
        .slick-dots{
          display:${navButtonStyle.display}!important;
        }
      `}</style>
      </div>
    </Box>
  );
}
