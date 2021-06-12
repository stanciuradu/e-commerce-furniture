import React from "react";
import "../components/ProductItem.css";

function ProductsItem(props) {
  const { image, name, price } = props;
  return (
    <div className="col-12 col-md-4">
      <img src={image} alt="" className="w-75" />
      <div className="descriere-products">
        <p>{name}</p>
        <p>{price}</p>
      </div>
        <button className='btn btn-outline-warning mb-2'>Adaugă în Cart</button>
    </div>
  );
}

export default ProductsItem;
