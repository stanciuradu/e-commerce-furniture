import React from "react";
import ProductsItem from "./ProductsItem";

function ProductsList(props) {
  const { products } = props;
  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => {
          return (
            <ProductsItem
              image={product.image}
              name={product.name}
              price={product.price}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductsList;
