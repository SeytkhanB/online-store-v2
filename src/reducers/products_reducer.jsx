import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

export const products_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };

    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };

    // product
    case GET_PRODUCTS_BEGIN:
      return { ...state, isProducts_loading: true };

    case GET_PRODUCTS_SUCCESS:
      const featured_products = action.payload.filter(
        (product) => product.featured === true
      );
      return {
        ...state,
        products: action.payload,
        featured_products,
        isProducts_loading: false,
      };

    case GET_PRODUCTS_ERROR:
      return { ...state, isProducts_loading: false, isProducts_error: true };

    // single product
    case GET_SINGLE_PRODUCT_BEGIN:
      return {
        ...state,
        isSingle_product_error: false,
        isSingle_product_loading: true,
      };

    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        isSingle_product_loading: false,
        single_product: action.payload,
      };

    case GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        isSingle_product_error: true,
        isSingle_product_loading: false,
      };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
