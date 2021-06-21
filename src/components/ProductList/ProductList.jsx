import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import {Link} from 'react-router-dom';
import '../ProductList/ProductList.css';

function ProductList(props) {
  const { products } = props;
  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => {
          return (
            <ProductItem
              image={product.image}
              name={product.name}
              price={product.price}
              key={index}
            />
          );
        })}
      </div>
      <div className='button-home'>
        <Link to='/'>
          <button className='btn btn-outline-dark mb-1'>Înapoi la Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductList;
