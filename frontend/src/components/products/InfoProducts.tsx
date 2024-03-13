import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonSecondary from '../buttons/ButtonSecondary';
import Divider from '@mui/material/Divider';
import AccordionUsage from '../Accordion';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

interface Product {
  id: string;
  produto: string;
  valor: string;
  rating: number;
  description: string;
  image: string;
  onAddToCart: void;
}
export default function InfoProducts({
  id,
  produto,
  valor,
  rating,
  description,
  image,
  onAddToCart,
}: Product) {
  const productTitle = produto.charAt(0).toUpperCase() + produto.slice(1);
  const formatPrice: string = `$${parseFloat(valor).toFixed(2)}`;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          width: '100%',
          height: { md: '600px', xl: '900px' },
          padding: { md: '3rem 2.5rem', xl: '5rem 5rem' },
        }}
      >
        <Box
          sx={{
            width: '40%',
            height: { md: '80%', xl: '100%' },
            marginRight: '4rem',
            border: '1px solid #00000033',
          }}
        >
          <CardMedia
            sx={{ padding: '2rem', height: { md: '300px', xl: '500px' } }}
            component="img"
            image={image}
          />
        </Box>
        <Box sx={{ width: '40%' }}>
          <Typography
            sx={{
              fontFamily: 'Quicksand',
              fontWeight: '700',
              fontSize: { md: '2rem', xl: '2.5rem' },
              lineHeight: '48px',
              color: '#252525',
            }}
          >
            {productTitle}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Quicksand',
              fontWeight: '700',
              fontSize: { md: '1.2rem', xl: '1.5rem' },
              lineHeight: '33.6px',
              color: '#000000',
            }}
          >
            {formatPrice}
          </Typography>
          <Rating
            name="avaliate"
            value={rating}
            readOnly
            icon={<StarIcon sx={{ color: '#7E5686' }} />}
          />
          <Typography
            sx={{
              fontFamily: 'Quicksand',
              fontWeight: '500',
              fontSize: { md: '.85rem', xl: '1rem' },
              lineHeight: '24px',
              color: '#000000',
              marginBottom: '1rem',
            }}
          >
            {description}
          </Typography>
          <ButtonSecondary
            texto="Adicionar ao carrinho"
            background="#E8F9A2"
            width="100%"
            height="60px"
            borderRadius="100px"
            onClick={() => {
              onAddToCart(id);
            }}
          />
          <ButtonSecondary
            texto="Comprar agora"
            background="#252525"
            width="100%"
            height="60px"
            borderRadius="100px"
            textColor="#fff"
          />
          <Typography
            sx={{
              textAlign: 'center',
              marginTop: '1rem',
              fontFamily: 'Quicksand',
              fontSize: '12px',
              lineHeight: '18px',
            }}
          >
            Frete grátis acima de R$50,00
          </Typography>
          <Divider sx={{ padding: '1rem 0' }} />
          <AccordionUsage
            title="Detalhes"
            description="Phasellus non laoreet nibh. Donec lobortis nisl eu elementum iaculis. Nullam sed purus eget orci molestie sollicitudin. Mauris lacinia velit et magna sollicitudin aliquet. Praesent egestas, ipsum eget luctus viverra, turpis dui mollis justo, sit amet luctus lectus nibh suscipit quam."
          />
          <Divider />
          <AccordionUsage
            title="Envio"
            description="Phasellus non laoreet nibh. Donec lobortis nisl eu elementum iaculis. Nullam sed purus eget orci molestie sollicitudin. Mauris lacinia velit et magna sollicitudin aliquet. Praesent egestas, ipsum eget luctus viverra, turpis dui mollis justo, sit amet luctus lectus nibh suscipit quam."
          />
        </Box>
      </Box>
    </>
  );
}
