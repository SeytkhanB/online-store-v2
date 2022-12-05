import axios from "axios";
import { useContext, useEffect, useReducer, createContext } from "react";
import { products_reducer } from "../reducers/products_reducer";
import { products_url } from "../utils/constants";
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

const initialState = {
  isSidebarOpen: false,
  isProducts_loading: false,
  isProducts_error: false,
  products: [],
  featured_products: [],
  isSingle_product_loading: false,
  isSingle_product_error: false,
  single_product: {},
};

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(products_reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const { data } = await axios.get(url);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const { data } = await axios.get(url);
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(products_url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
