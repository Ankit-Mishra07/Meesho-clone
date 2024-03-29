import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./actionTypes";

const initState = {
    isLoading: false,
    products: [],
    isError: false
}

export const productsReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_DATA_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: payload
            };
        case GET_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            return state;
    }
}