import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS} from "../actions/types";
const initialState = {
    items: [],
    loading: false,
    error: ''
  };

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return{
                ...state,
                items: action.payload,
            }
        case FETCH_PRODUCTS_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default productReducer;