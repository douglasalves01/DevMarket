import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
interface Product {
  id: string;
  product: string;
  category: string;
  image: string;
  price: string;
}
export default function CardProduct({
  id,
  product,
  category,
  price,
  image,
}: Product) {
  const formatPrice: string = `$${parseFloat(price).toFixed(2)}`;
  const handleOpenUrl = (url: string) => {
    window.open(url, '_blank');
  };
  return (
    <Card
      sx={{ maxWidth: 345, marginRight: '10px' }}
      key={id}
      onClick={() => handleOpenUrl(`/product/${id}`)}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={product} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontFamily: 'Quicksand',
              fontSize: '1.125rem',
              fontWeight: '600',
              lineHeight: '27px',
              color: '#252525',
            }}
          >
            {product}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: 'Quicksand',
              fontSize: '.875rem',
              fontWeight: '400',
              lineHeight: '21px',
              color: '#252525',
            }}
          >
            {category}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: 'Quicksand',
              fontSize: '1.25rem',
              fontWeight: '700',
              lineHeight: '30px',
              color: '#252525',
            }}
          >
            {formatPrice}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
