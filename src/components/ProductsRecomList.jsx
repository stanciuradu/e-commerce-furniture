import React from "react";
import ProductsRecomItem from "./ProductsRecomItem";

function productsRecomList(props) {
  const { productsRecom } = props;
  return (
    <div className="container">
      <div className="row">
        {productsRecom.map((productRecom, index) => {
          return (
            <ProductsRecomItem
              image={productRecom.image}
              name={productRecom.name}
              price={productRecom.price}
              currency={productsRecom.currency}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default productsRecomList;
