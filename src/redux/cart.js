// in cadrul acestui fisier se pune set-up pentru store-ul aplicatiei
import { createStore } from "redux";
import cartReducer from "./reducers/cart";

// utilizam Redux-Persist in cadrul aplicatiei pentru o stocare persisitenta a produselor, astfel încât acestea să nu se piardă la refresh
import { persistStore, persistReducer } from "redux-persist";
// import sotrage pe post de localStorage pentru stocarea datelor
import storage from "redux-persist/lib/storage";

// creem obiectul de configurare pentru persist
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = createStore(persistedReducer);

export const persistedStore = persistStore(store);
