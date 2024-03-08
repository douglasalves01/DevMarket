import NavBar from '../components/NavBar';
import Introduction from '../components/Introduction';
import Footer from '../components/Footer';
import ListProducts from '../components/ListProducts';
import HeadlineProducts from '../components/HeadlineProducts';

function Home() {
  return (
    <>
      <NavBar />
      <Introduction />
      <HeadlineProducts />
      <ListProducts categoria="eletrônicos" />
      <ListProducts categoria="livros" />
      <Footer />
    </>
  );
}

export default Home;
