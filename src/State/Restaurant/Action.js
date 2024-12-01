import { api } from "../../component/config/api";
import { 
    CREATE_CATEGORY_FAILURE,
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_RESTAURANT_FAILURE, 
    CREATE_RESTAURANT_REQUEST, 
    CREATE_RESTAURANT_SUCCESS, 
    DELETE_RESTAURANT_FAILURE, 
    DELETE_RESTAURANT_REQUEST, 
    DELETE_RESTAURANT_SUCCESS, 
    GET_ALL_RESTAURANT_FAILURE, 
    GET_ALL_RESTAURANT_REQUEST, 
    GET_ALL_RESTAURANT_SUCCESS, 
    GET_RESTAURANT_BY_ID_FAILURE, 
    GET_RESTAURANT_BY_ID_REQUEST, 
    GET_RESTAURANT_BY_ID_SUCCESS,
    GET_RESTAURANT_BY_USER_ID_FAILURE, 
    GET_RESTAURANT_BY_USER_ID_REQUEST, 
    GET_RESTAURANT_BY_USER_ID_SUCCESS, 
    GET_RESTAURANT_CATEGORY_FAILURE, 
    GET_RESTAURANT_CATEGORY_REQUEST, 
    GET_RESTAURANT_CATEGORY_SUCCESS, 
    UPDATE_RESTAURANT_FAILURE, 
    UPDATE_RESTAURANT_REQUEST, 
    UPDATE_RESTAURANT_STATUS_FAILURE, 
    UPDATE_RESTAURANT_STATUS_REQUEST, 
    UPDATE_RESTAURANT_STATUS_SUCCESS, 
    UPDATE_RESTAURANT_SUCCESS 
} from "./ActionType";

export const getAllRestaurantAction = (token) => {
    return async (dispatch) => {
        dispatch({ type: GET_ALL_RESTAURANT_REQUEST });
        try {
            const { data } = await api.get(`/api/restaurants`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch({ type: GET_ALL_RESTAURANT_SUCCESS, payload: data });
            console.log("restaurant profile", data);

        } catch (error) {
            dispatch({ type: GET_ALL_RESTAURANT_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const getRestaurantById = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });
        try {
            const response = await api.get(`api/restaurants/${reqData.restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            });
            dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const createRestaurant = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_RESTAURANT_REQUEST });
        try {
            const response = await api.post(`api/admin/restaurants`, reqData.data, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`
                }
            });
            dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const updateRestaurant = ({ restaurantId, restaurantData, token }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_RESTAURANT_REQUEST });
        try {
            const response = await api.put(`api/admin/restaurants/${restaurantId}`, restaurantData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const getRestaurantByUserId = ({ token }) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANT_BY_USER_ID_REQUEST });
        try {
            const response = await api.get(`api/admin/restaurants/user`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch({ type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const deleteRestaurant = ({ restaurantId, token }) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_RESTAURANT_REQUEST });
        try {
            const response = await api.delete(`api/admin/restaurants/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: DELETE_RESTAURANT_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const updateRestaurantStatus = ({ restaurantId, token }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });
        try {
            const response = await api.put(`api/admin/restaurants/${restaurantId}/status`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch({ type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};

export const createCategory = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_CATEGORY_REQUEST });
        try {
            const response = await api.post(`api/admin/category`, reqData.data, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`
                }
            });
            dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error });
            console.log("error", error);

        }
    };
};

export const getRestaurantCategory = ({ jwt, restaurantId }) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANT_CATEGORY_REQUEST });
        try {
            const response = await api.get(`api/category/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: GET_RESTAURANT_CATEGORY_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: GET_RESTAURANT_CATEGORY_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};
