import Card from "../../Shared/Card/Card.js";
import productsList from "../../productsList.js";

const Home = () => {
  const products = productsList;
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
