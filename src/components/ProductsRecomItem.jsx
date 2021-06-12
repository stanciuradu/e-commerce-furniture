import React from "react";
import "../components/ProductsRecomItem.css";

function productsRecomItem(props) {
  const { image, name, price } = props;
  return (
    <div className="col-12 col-md-4">
      <img src={image} alt="" className="w-75" />
      <div className="description">
        <p>{name}</p>
        <p id="price">{price}</p>
      </div>
    </div>
  );
}

export default productsRecomItem;
