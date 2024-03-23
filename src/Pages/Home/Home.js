import React, { useEffect } from 'react';
import Card from "../../Shared/Card/Card.js";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/slices/productSlice';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(fetchProducts());
    }
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="container mt-3">
      <div className="row mt-3">
        {products.map((product) => (
          <div className="col col-lg-3 mb-5">
            <Card
              key={product.id}
              id={product.id}
              image={product.images[0]}
              title={product.title}
              description={product.description}
              category={product.category}></Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

