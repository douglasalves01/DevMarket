import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import InfoProducts from '../components/InfoProducts';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

interface Product {
  id: string;
  produto: string;
  categoria: string;
  image: string;
  valor: string;
}

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

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
          };
          setProduct(productData);
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, [id]);

  return (
    <>
      <NavBar />
      {product && (
        <InfoProducts
          key={product.id}
          produto={product.produto}
          rating="5"
          valor={product.valor}
          image={product.image}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor tortor magna, luctus venenatis magna pretium et. Donec mauris nisl, suscipit et maximus et, efficitur ut elit. Phasellus sed lacinia arcu. Nullam massa mi, auctor nec diam ac, molestie lacinia nunc."
        />
      )}
      <Footer />
    </>
  );
}
