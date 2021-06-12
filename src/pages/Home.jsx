import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import "../pages/Home.css";
import productsRecom from "../utils/productsRecom.json";
import ProductsRecomList from "../components/ProductsRecomList";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      // prima data produsele recomandate sunt un array gol până vin de a server
      productsRecom: [],
    };
  }
  // fac request catre server pentru a aduce datele cu cele trei produse recomandate
  componentDidMount() {
    this.setState({ productsRecom: productsRecom });
  }
  render() {
    return (
      <div className="container">
        <Layout>
          <div className="row">
            <div className="col-6">
              <h1>
                Decoreză-ți zona de confort cu cele mai minuntate modele de
                mobilă
              </h1>
              <p>
                În cadrul acestui E-commerce vei avea ocazia de a îti realiza și
                moderniza casa visurilor tale!
              </p>
              <Link to="/products">
                <button className="btn btn-info">Cumpără acum</button>
              </Link>
            </div>
            <div className="col-6">
              <img
                src="https://mobiladevis.md/wp-content/uploads/2020/10/Lux.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="title">
            <h2 className="text-center mt-3">Produse recomandate</h2>
            <ProductsRecomList productsRecom={this.state.productsRecom} />
          </div>
        </Layout>
      </div>
    );
  }
}

export default Home;
