// in cadrul acetui fisier vom implementa logica reducer-ului care modifica store-ul aplicație

const initialState = {
    products: [],
  };
  
  function cartReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_TO_CART":
        // preiau produsul din actiune
        const newProducts = action.payload;
        const newState = {
          // copiez continutul state-ului initial
          ...state,
          // in cadrul array-ului de produse la state-ul initial adaug noul produs preluat prin action.payload
          products: [...state.products, newProducts],
        };
        return newState;
      case "REMOVE_CART":
        const newStateRemove = {
          ...state,
          products: [],
        };
        return newStateRemove;
      default:
        return state;
    }
  }
  
  export default cartReducer;