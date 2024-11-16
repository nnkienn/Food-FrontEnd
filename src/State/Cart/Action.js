import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEAR_CART_FAILURE, CLEAR_CART_REQUEST, CLEAR_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEMS_FAILURE, GET_ALL_CART_ITEMS_REQUEST, GET_ALL_CART_ITEMS_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType";

import { api, API_URL } from "../../component/config/api";


export const findCart = (token) => {
    return async (dispatch) => {
        dispatch({ type: FIND_CART_REQUEST });
        try {
            const { data } = await api.get(`api/cart/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch({ type: FIND_CART_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: FIND_CART_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const getAllCartItems = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_ALL_CART_ITEMS_REQUEST });
        try {
            const response = await api.get(`api/carts/${reqData.cartId}/items`, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            });
            dispatch({ type: GET_ALL_CART_ITEMS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: GET_ALL_CART_ITEMS_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};
export const addItemToCart = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
        try {
            const response = await api.put(`api/cart/add`, reqData.cartItem, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`
                }
            });
            dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const updateCartItem = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_CART_ITEM_REQUEST });
        try {
            const response = await api.put(`api/cart-item/update`, reqData.data, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`
                }
            });
            dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const removeCart = ({ cartItemId, token }) => {
    return async (dispatch) => {
        dispatch({ type: REMOVE_CART_ITEM_REQUEST });
        try {
            const {data} = await api.delete(`api/cart-item/${cartItemId}/remove`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload:cartItemId });
        } catch (error) {
            dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const clearCartAction = () => {
    return async (dispatch) => {
        dispatch({ type: CLEAR_CART_REQUEST });
        try {
            const {data} = await api.put(`api/cart/clear`,{}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            });
            dispatch({ type: CLEAR_CART_SUCCESS, payload:data });
        } catch (error) {
            dispatch({ type: CLEAR_CART_FAILURE, payload: error.message });
            console.log("error", error);
        }
    };
};
