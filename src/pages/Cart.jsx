import React from "react";
import Layout from "../components/Layout";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../pages/Cart.css";

function Cart(props) {
  const { productsItems } = props;
  return (
    <div className="container">
      <Layout>
        {productsItems.length ? (
          <div className="w-100">
            <div class="container-products">
              <div class="row row-cols-4">
                <div class="col">Produs</div>
                <div class="col">Nume</div>
                <div class="col">Pret</div>
              </div>
            </div>
            {productsItems.map((item) => {
              return (
                // vreau ca produsele sa fie afisate cate patru pe rand
                <div class="container">
                  <div class="row row-cols-4 mb-3">
                    <div class="col">
                      <img src={item.image} alt="" className="w-50" />
                    </div>
                    <div class="col">
                      <h3>{item.name}</h3>
                    </div>
                    <div class="col">
                      <h3>{item.price}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mesaj-cart">
            <p className="h3">Coșul tău de cumpărături este gol</p>
            <Link to="/products">
              <button className="btn btn-outline-info">
                Înapoi la pagina de produse
              </button>
            </Link>
          </div>
        )}
      </Layout>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    // productsItem sunt produsele din cart
    productsItems: state.products,
  };
}
// abonez pagina de cart la store
export default connect(mapStateToProps)(Cart);
