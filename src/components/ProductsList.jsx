import React from "react";
import ProductsItem from "./ProductsItem";
import {Link} from 'react-router-dom';
import '../components/ProductList.css';

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
      <div className='button-home'>
        <Link to='/'>
          <button className='btn btn-outline-dark mb-1'>Înapoi la Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductsList;
