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
      products: []
    };
  }
  // facem request-ul catre server pentru preluarea de date
  componentDidMount() {
    this.setState({ products: products });
  }

  handleAllProducts(event) {
    this.setState({ products: products });
  }

  handleFilterProductsByOffice(event) {
    const filterProductsByOffice = this.state.products.filter(
      (product) =>
        product.name === "Birou de lemn" || product.name === "Birou Albany"
    );
    this.setState({ products: filterProductsByOffice });
  }
  handleFilterProductsByLivingRoom(event) {
    const filterProductsByLivingRoom = this.state.products.filter(
      (product) =>
        product.name === "Sufragerie Strowmman" ||
        product.name === "Canapea Sofiah-Voltera" ||
        product.name === "Canapea Sofiah-voltera din piele" ||
        product.name === "Sofa set" ||
        product.name === "Fotoliu din piele de căprioară"
    );
    this.setState({ products: filterProductsByLivingRoom });
  }
  handleFilterProductsByKitchen(event) {
    const handleFilterProductsByKitchen = this.state.products.filter(
      (product) =>
        product.name === "Scaune pentru bar" ||
        product.name === "Masă de bucătărie" ||
        product.name === "Masă de lemn"
    );
    this.setState({ products: handleFilterProductsByKitchen });
  }
  handleFilterProductsByBedroom(event) {
    const handleFilterProductsByBedroom = this.state.products.filter(
      (product) =>
        product.name === "Pat din lemn" ||
        product.name === "Raft suport Mario" ||
        product.name === "Fotoliu"
    );
    this.setState({ products: handleFilterProductsByBedroom });
  }
  handleFilterProductsByChildrenRoom(event) {
    const handleFilterProductsByChildrenRoom = this.state.products.filter(
      (product) => product.name === "Scaun" || product.name === "Birou de lemn"
    );
    this.setState({ products: handleFilterProductsByChildrenRoom });
  }
  render() {
    return (
      <div className="container">
        <Layout>
          <h4 className="text-center">Categorii</h4>
          <button className="products">
            <button
              type="button"
              onClick={(event) => this.handleAllProducts(event)}
            >
              All
            </button>
            <button
              type="button"
              onClick={(event) => this.handleFilterProductsByOffice(event)}
            >
              Birou
            </button>
            <button
              type="button"
              onClick={(event) => this.handleFilterProductsByLivingRoom(event)}
            >
              Sufragerie
            </button>
            <button
              type="button"
              onClick={(event) => this.handleFilterProductsByKitchen(event)}
            >
              Bucatarie
            </button>
            <button
              type="button"
              onClick={(event) => this.handleFilterProductsByBedroom(event)}
            >
              Dormitor
            </button>
            <button
              type="button"
              onClick={(event) =>
                this.handleFilterProductsByChildrenRoom(event)
              }
            >
              Camera de copii
            </button>
          </button>
          {/* pasez array-ul ca props catre ProductsList pentru a se mapa prin el */}
          <ProductsList products={this.state.products} />
        </Layout>
      </div>
    );
  }
}

export default Products;
