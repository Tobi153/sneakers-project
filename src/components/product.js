import React from "react";
function ProductPage({ addToCart }) {
  const product = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    quantity: 1,
    price: 125,
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
    </div>
  );
}

export default ProductPage;
