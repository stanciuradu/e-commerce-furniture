import React from "react";
import "../components/ProductItem.css";

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
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  render() {
    const { image, name, price } = this.props;
    return (
      <div className="col-12 col-md-4">
        <img src={image} alt="" className="w-75" />
        <div className="descriere-products">
          <p>{name}</p>
          <p>{price}</p>
        </div>

        <button className="btn btn-outline-warning mb-2">Adaugă în Cart</button>
        <p>Adaugă cantitatea de produse în coș</p>
        <div className='quantity-buttons'>
        <button type="button" onClick={() => this.handleIncrementCounter()}>
          +
        </button>
        <button type="button" onClick={() => this.handleDecrementCounter()}>
          -
        </button>
        {/* randez continutul pe ecran al state-ului initial */}
        </div>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

export default ProductsItem;
