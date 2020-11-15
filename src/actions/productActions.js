import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FILTER_PRODUCTS_BY_SIZE,
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
    const filteredItems = response.data
    dispatch(fetchProductsSuccess(filteredItems))
    }).catch(error =>{
        const errorMsg = error.message
        dispatch(fetchProductsFailure(errorMsg))
    })
};

export const filterProductsBySize = (items, size) => (dispatch)=> {
return dispatch({
  type: FILTER_PRODUCTS_BY_SIZE,
  payload: {
    size: size,
    items: size === "" ? items : items.filter(item => item.availableSizes.indexOf(size.toUpperCase()) >= 0)
  }
})
}