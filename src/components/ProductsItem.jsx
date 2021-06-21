import React from "react";
import "../components/ProductItem.css";
// conectez componenta ProductItem la redux
import { connect } from "react-redux";
// importam actiunea din reddux.actions
import { addToCart } from "../redux/actions/cart";
import StripeCheckout from "react-stripe-checkout";
import { ReactComponent as Premium } from "../assets/icons/premium.svg";

function ProductsItem(props) {
  function onToken(token) {
    console.log(token);
  }
  const { image, name, price, addToCartWithDispatch } = props;
  return (
    <div className="col-12-pi col-md-4">
      <img src={image} alt="" className="w-75" />
      <div className="descriere-products">
        <p>{name}</p>
        <p>{price}</p>
      </div>

      <div className="container-premium">
        <button
          className="btn btn-outline-warning mb-2"
          onClick={() => {
            addToCartWithDispatch({ image, name, price });
          }}
        >
          Adaugă în Cart
        </button>
        <Premium className='icon-premium' title='Calitate Premium' />
      </div>
      <div className="button-pay">
        <StripeCheckout
          className="stripe"
          token={onToken}
          name="Payment online"
          currency="LEI"
          amount="price*100"
          image="https://cdn.dribbble.com/users/3333696/screenshots/13935955/media/5fc0145e5317c5357078ae13e9871cf3.jpg?compress=1&resize=400x300"
          ComponentClass="div"
          panelLabel="Give Money"
          email="info@vidhub.co"
          stripeKey="pk_test_51IxGvaFUW1mdMZlLGIMJe58paJsoAelt8lhucSRlGv9Y1jVHmaaJ72Mu3egQiQeWDkxVPpHG6cQYbLePLoeMKOxA00rT9KEqVM"
        />
      </div>
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    addToCartWithDispatch: (product) => dispatch(addToCart(product)),
  };
}
// utilizez functia mapDispatchToProps deaorece din cadrul acestei componente la apasarea butonului de addToCart se va modifica store-ul aplicatiei
export default connect(null, mapDispatchToProps)(ProductsItem);
