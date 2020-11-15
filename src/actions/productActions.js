import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_TO_CART,
  REMOVE_TO_CART,
} from "./types";
import axios from "axios";

export const fetchProductsRequest = () =>  {
    return {
      type: FETCH_PRODUCTS_REQUEST,
    };
  };

export const fetchProductsSuccess = (items) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: items,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const fetchProducts = () => (dispatch) => {
    dispatch(fetchProductsRequest)
  axios.get("http://localhost:8000/products").then((response) => {
    const items = response.data
    dispatch(fetchProductsSuccess(items))
    }).catch(error =>{
        const errorMsg = error.message
        dispatch(fetchProductsFailure(errorMsg))
    })
};
