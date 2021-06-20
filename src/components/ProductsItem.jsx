import React from "react";
import "../components/ProductItem.css";
// conectez componenta ProductItem la redux
import { connect } from "react-redux";
// importam actiunea din reddux.actions
import { addToCart } from "../redux/actions/cart";

class ProductsItem extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  // fac functia pentru incemetare a state-ului cu o unitate
  handleIncrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }
  // fac functioa pentru decrementare a state-ului cu o unitate
  handleDecrementCounter() {
    this.setState({ counter: this.state.counter - 1 });
  }
  render() {
    const { image, name, price, addToCartWithDispatch } = this.props;
    return (
      <div className="col-12-pi col-md-4">
        <img src={image} alt="" className="w-75" />
        <div className="descriere-products">
          <p>{name}</p>
          <p>{price}</p>
        </div>

        <button
          className="btn btn-outline-warning mb-2"
          onClick={() => {
            addToCartWithDispatch({ image, name, price });
          }}
        >
          Adaugă în Cart
        </button>
        <p>Adaugă cantitatea de produse în coș</p>
        <div className="quantity-buttons">
          <button type="button" onClick={() => this.handleIncrementCounter()}>
            +
          </button>
          {/* randez continutul pe ecran al state-ului initial */}
          <h1>{this.state.counter}</h1>
          <button type="button" onClick={() => this.handleDecrementCounter()}>
            -
          </button>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addToCartWithDispatch: (product) => dispatch(addToCart(product)),
  };
}
// utilizez functia mapDispatchToProps deaorece din cadrul acestei componente la apasarea butonului de addToCart se va modifica store-ul aplicatiei
export default connect(null, mapDispatchToProps)(ProductsItem);
