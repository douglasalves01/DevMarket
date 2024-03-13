import NavBar from '../components/NavBar';
import Introduction from '../components/Introduction';
import Footer from '../components/Footer';
import ListProducts from '../components/products/ListProducts';
import HeadlineProducts from '../components/HeadlineProducts';
import Newsletter from '../components/Newsletter';
import { useState, useEffect } from 'react';
function Home() {
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

  return (
    <>
      <NavBar cartCount={cartCount} cartItems={cartItems} />
      <Introduction />
      <HeadlineProducts />
      <ListProducts categoria="eletrônicos" />
      <ListProducts categoria="livros" />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
