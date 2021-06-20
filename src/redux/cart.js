// in cadrul acestui fisier se pune set-up pentru store-ul aplicatiei
import { createStore } from "redux";
import cartReducer from "./reducers/cart";

const store = createStore(cartReducer);

export default store;
