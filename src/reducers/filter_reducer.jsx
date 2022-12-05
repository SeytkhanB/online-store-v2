import {
  LOAD_PRODUCTS,
  SET_LIST_VIEW,
  SET_GRID_VIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

export const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      let maxPrice = action.payload.map((product) => product.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        // if we use "all_products: action.payload" <-- it won't work
        // because it will just refer to the same place in the memory!
        // when we use spread operator it will copy, and life will be great :)
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };
    }

    case SET_GRID_VIEW: {
      return { ...state, grid_view: true };
    }

    case SET_LIST_VIEW: {
      return { ...state, grid_view: false };
    }

    case UPDATE_SORT: {
      return { ...state, sort: action.payload };
    }

    case SORT_PRODUCTS: {
      const { sort, filtered_products } = state;
      let newProducts = [...filtered_products];
      if (sort === "price-lowest") {
        newProducts = newProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
        newProducts = newProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        newProducts = newProducts.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (sort === "name-z") {
        newProducts = newProducts.sort((a, b) => b.name.localeCompare(a.name));
      }
      return { ...state, filtered_products: newProducts };
    }

    case UPDATE_FILTERS: {
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    }

    case FILTER_PRODUCTS: {
      const { all_products } = state;
      const { text, category, company, color, price, isShipping } =
        state.filters;
      let newProducts = [...all_products];

      // FILTERING
      // TEXT
      if (text) {
        newProducts = newProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(text);
        });
      }

      // CATEGORY
      if (category !== "all") {
        newProducts = newProducts.filter(
          (product) => product.category === category
        );
      }

      // COMPANY
      if (company !== "all") {
        newProducts = newProducts.filter(
          (product) => product.company === company
        );
      }

      // COLOR
      if (color !== "all") {
        newProducts = newProducts.filter((product) =>
          product.colors.find((c) => c === color)
        );
      }

      // ISSHIPPING
      if (isShipping) {
        newProducts = newProducts.filter(
          (product) => product.shipping === true
        );
      }

      // PRICE
      newProducts = newProducts.filter((product) => product.price <= price);

      return { ...state, filtered_products: newProducts };
    }

    case CLEAR_FILTERS: {
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          price: state.filters.max_price,
          isShipping: false,
        },
      };
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};
