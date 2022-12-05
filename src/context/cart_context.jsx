import { useEffect, useContext, useReducer, createContext } from "react";
import { cart_reducer } from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  TOGGLE_CART_ITEM_AMOUNT,
  COUNT_CART_TOTALS,
} from "../actions";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 69,
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initialState);

  // ADD TO CART
  const addToCart = (id, color, amount, single_product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, color, amount, single_product },
    });
  };

  // REMOVE ITEM
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  // TOGGLE AMOUNT
  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };

  // CLEAR CART
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, clearCart, addToCart, toggleAmount, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
