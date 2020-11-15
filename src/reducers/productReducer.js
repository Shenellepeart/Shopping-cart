import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  FILTER_PRODUCTS_BY_SIZE,
  SORT_PRODUCTS_BY_PRICE,
} from "../actions/types";
const initialState = {
  items: [],
  loading: false,
  error: "",
  cartItems: [],
  size: "",
  sort: "",
  filteredItems: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        filteredItems: action.payload.items,
        size: action.payload.size,
      };
    case SORT_PRODUCTS_BY_PRICE:
      return {
        ...state,
       sort: action.payload.sort,
       filteredItems: action.payload.items,
      };
    default:
      return state;
  }
};

export default productReducer;
