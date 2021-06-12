import React from "react";
import Layout from "../components/Layout";
import "../pages/Products.css";
import products from "../utils/products.json";
import ProductsList from "../components/ProductsList";
class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      // initial array-ul este gol, până ce datele vin de la back-end
      products: [],
    };
  }
  // facem request-ul catre server pentru preluarea de date
  componentDidMount() {
    this.setState({ products: products });
  }
  
  render() {
    return (
      <div className="container">
        <Layout>
          <h4>Categorii</h4>
          <button className="products">
            <button type="button">All</button>
            <button type="button">Birou</button>
            <button type="button">Sufragerie</button>
            <button type="button">Bucatarie</button>
            <button type="button">Dormitor</button>
            <button type="button">Camera de copii</button>
          </button>
          <h4>Culori</h4>
          <div className="choose-colors">
            <button>All</button>
            <button id="red">Red</button>
            <button id="green">Green</button>
            <button id="blue">Blue</button>
            <button id="brown">Brown</button>
            <button id="beige">Beige</button>
          </div>
          {/* pasez array-ul ca props catre ProductsList pentru a se mapa prin el */}
          <ProductsList products={this.state.products} />
        </Layout>
      </div>
    );
  }
}

export default Products;
