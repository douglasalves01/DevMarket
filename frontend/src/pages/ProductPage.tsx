import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import InfoProducts from '../components/products/InfoProducts';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

interface Product {
  id: string;
  produto: string;
  categoria: string;
  image: string;
  valor: string;
  rating: number;
  handleAddToCart?: void;
}

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState<number>(() => {
    const storedCount = localStorage.getItem('cartCount');
    return storedCount ? parseInt(storedCount, 10) : 0;
  });
  const [cartItems, setCartItems] = useState<string[]>(() => {
    const storedItems = localStorage.getItem('cartItems');
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          const responseData = response.data.data;
          const productData: Product = {
            id: responseData._id,
            produto: responseData.produto,
            categoria: responseData.categoria,
            image: responseData.image,
            valor: responseData.valor,
            rating: 3,
          };
          setProduct(productData);
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, [id]);

  useEffect(() => {
    localStorage.setItem('cartCount', cartCount.toString());
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartCount, cartItems]);

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
    if (product) {
      setCartItems([...cartItems, product.id]);
    }
  };

  return (
    <>
      <NavBar cartCount={cartCount} cartItems={cartItems} />
      {product && (
        <InfoProducts
          onAddToCart={handleAddToCart}
          id={product.id}
          key={product.id}
          produto={product.produto}
          rating={product.rating}
          valor={product.valor}
          image={product.image}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor tortor magna, luctus venenatis magna pretium et. Donec mauris nisl, suscipit et maximus et, efficitur ut elit. Phasellus sed lacinia arcu. Nullam massa mi, auctor nec diam ac, molestie lacinia nunc."
        />
      )}

      <Footer />
    </>
  );
}
