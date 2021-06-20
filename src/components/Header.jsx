import React from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { ReactComponent as Cart } from "../assets/icons/cart.svg";
import "../components/Header.css";
import { connect } from "react-redux";

function Header(props) {
  // preiau obiectul din props-uri
  const { numberOfProducts } = props;
  return (
    <div className="row">
      <div className="col-4">
        <img src={Logo} alt="" />
      </div>
      <div className="col-4">
        <nav>
          <ul>
            <li>
              <Link to="/" className="link">
                <h3>Home</h3>
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                <h3>About</h3>
              </Link>
            </li>
            <li>
              <Link to="/products" className="link">
                <h3>Products</h3>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-4">
        <div className="cart">
          <Link to="/cart" className="link">
            <h3>Cart</h3>
          </Link>
          <Cart />
          <p className="number-of-products">{numberOfProducts}</p>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    // vreau ca in header sa am numarul de produse, motiv pentru care ele vor fi preluate din state.products
    numberOfProducts: state.products.length,
  };
}

// prima data abonez componenta de Header la Redux, deci folosesc mapStateToProps
export default connect(mapStateToProps)(Header);
