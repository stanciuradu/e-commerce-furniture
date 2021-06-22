// actiunile sunt simpla functii care returneazăun obiect și descriu modalitatea în care reducer-ul va modifica store-ul
export function addToCart(products) {
    return {
      // type reprezinta tipul actiunii
      type: "ADD_TO_CART",
      payload: products,
    };
  }
  
  // actine pentru stergerea produselor din cart
  export function removeCart(products){
    return{
      type:'REMOVE_CART',
      payload:products
    }
  }