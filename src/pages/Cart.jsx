import React from "react";
import Layout from "../components/Layout";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../pages/Cart.css";
import StripeCheckout from "react-stripe-checkout";
import { removeCart } from "../redux/actions/cart";

function Cart(props) {
  const { productsItems, removeCartWithDispatch } = props;
  return (
    <div className="container">
      <Layout>
        {productsItems.length ? (
          <div className="w-100">
            <div className="container-products">
              <div className="row row-col-md-4s-4">
                <div className="col-md-4">Produs</div>
                <div className="col-md-4">Nume</div>
                <div className="col-md-4">Pret</div>
                <div className="col-md-4">Plată cu cardul</div>
              </div>
            </div>
            {productsItems.map((item) => {
              return (
                // vreau ca produsele sa fie afisate cate patru pe rand
                <div className="container">
                  <div className="row row-col-md-4s-4 mb-3">
                    <div className="col-md-4">
                      <img src={item.image} alt="" className="w-50" />
                    </div>
                    <div className="col-md-4">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="col-md-4">
                      <h3>{item.price}</h3>
                    </div>
                    <div className="col-md-4">
                      <StripeCheckout
                        className="stripe"
                        token={onToken}
                        name="Payment online"
                        currency="LEI"
                        amount={item.price * 100}
                        image="https://cdn.dribbble.com/users/3333696/screenshots/13935955/media/5fc0145e5317c5357078ae13e9871cf3.jpg?compress=1&resize=400x300"
                        ComponentClass="div"
                        panelLabel="Give Money"
                        email="info@vidhub.co"
                        stripeKey="pk_test_51IxGvaFUW1mdMZlLGIMJe58paJsoAelt8lhucSRlGv9Y1jVHmaaJ72Mu3egQiQeWDkxVPpHG6cQYbLePLoeMKOxA00rT9KEqVM"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="buttons-options-remove">
              <Link to="/products">
                <button className="btn btn-outline-danger mb-2">
                  Continuati cumparaturi online!
                </button>
              </Link>
              <button
                className="btn btn-outline-success mb-2"
                onClick={() => {
                  removeCartWithDispatch();
                }}
              >
                Sterge lista de produse!
              </button>
            </div>
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
function onToken(token) {
  console.log(token);
}
function mapStateToProps(state) {
  return {
    // productsItem sunt produsele din cart
    productsItems: state.products,
  };
}
// implementez functia pentru stergere a listei de produse din cart
function mapDispatchToProps(dispatch) {
  return {
    removeCartWithDispatch: () => dispatch(removeCart()),
  };
}
// abonez pagina de cart la store, dupa care sterg store-ul
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
