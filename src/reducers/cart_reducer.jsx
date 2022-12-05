import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

export const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, color, amount, single_product } = action.payload;
      const { name, price, stock } = single_product;
      const image = single_product.images[0].url;

      const tempItem = state.cart.find((item) => item.id === id + color);

      if (tempItem) {
        const tempCart = state.cart.map((item) => {
          if (item.id === id + color) {
            let newAmount = item.amount + amount;
            if (newAmount > item.stock) {
              newAmount = item.stock;
            }
            return { ...item, amount: newAmount };
          } else {
            return item;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          id: id + color,
          name,
          color,
          amount,
          image,
          price,
          stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }

    case REMOVE_CART_ITEM: {
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: newCart };
    }

    case CLEAR_CART: {
      return { ...state, cart: [] };
    }

    case TOGGLE_CART_ITEM_AMOUNT: {
      const { id, value } = action.payload;
      const newCart = state.cart.map((item) => {
        if (item.id === id) {
          if (value === "increase") {
            let newAmount = item.amount + 1;
            if (newAmount > item.stock) {
              newAmount = item.stock;
            }
            return { ...item, amount: newAmount };
          }
          if (value === "decrease") {
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
        }
        return item;
      });
      return { ...state, cart: newCart };
    }

    case COUNT_CART_TOTALS: {
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;
          total.total_items += amount;
          total.total_amount += price * amount;

          return total;
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      );

      return { ...state, total_items, total_amount };
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};
