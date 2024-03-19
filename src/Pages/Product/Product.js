import React from "react";
import { useParams } from "react-router-dom";
import productsList from "../../productsList.js";
import CarousleCustom from "../../Shared/CarousleCustom/CarousleCustom.js";

function Product() {
  const productId = useParams().productID;

  function getProductById(productId) {
    return productsList.find((product) => product.id === Number(productId));
  }

  const product = getProductById(productId);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <CarousleCustom images={product.images}></CarousleCustom>
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">{product.title}</h2>
          <p className="lead mb-4">Price: ${product.price}</p>
          <p className="text-muted mb-4">Brand: {product.brand}</p>
          <p className="mb-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
