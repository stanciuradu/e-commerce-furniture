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
            <div className="table mt-2">
              <p className="w-25">Produs</p>
              <p className="w-25">Pret</p>
              <p className="w-25">Cantitate</p>
              <p className="w-25">Total</p>
            </div>
            {productsItems.map((item) => {
              return (
                // vreau ca produsele sa fie afisate cate trei pe rand
                <div className="col-12 col-md-3">
                  <img src={item.image} alt="" className="w-50" />
                  <h3 className='w-25'>{item.name}</h3>
               
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
