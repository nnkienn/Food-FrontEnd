import { api } from "../../component/config/api";
import { 
    CREATE_MENU_ITEM_FAILURE, 
    CREATE_MENU_ITEM_REQUEST, 
    CREATE_MENU_ITEM_SUCCESS, 
    GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
    DELETE_MENU_ITEM_REQUEST,
    DELETE_MENU_ITEM_SUCCESS,
    DELETE_MENU_ITEM_FAILURE,
    SEARCH_MENU_ITEM_REQUEST,
    SEARCH_MENU_ITEM_SUCCESS,
    SEARCH_MENU_ITEM_FAILURE,
    UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST,
    UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,
    UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE
} from "./ActionType";

export const createMenuItem = ({ menu, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_MENU_ITEM_REQUEST });
        try {
            const { data } = await api.post(`api/admin/food`, menu, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: CREATE_MENU_ITEM_FAILURE, payload: error });
        }
    };
};
// Get Menu Items by Restaurant ID
export const getMenuItemsByRestaurantId = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });
        try {
            const { restaurantId, vegetarian, seasonal, nonveg, food_category, jwt } = reqData;

            const { data } = await api.get(`api/food/restaurant/${restaurantId}`, {
                params: {
                    vegetarian,
                    seasonal,
                    nonveg,
                    food_category
                },
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data });
            console.log("menudata", data)
        } catch (error) {
            dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: error });
        }
    };
};

// Delete Menu Item
export const deleteMenuItem = ({ menuItemId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_MENU_ITEM_REQUEST });
        try {
            await api.delete(`api/admin/food/${menuItemId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: DELETE_MENU_ITEM_SUCCESS, payload: menuItemId });
        } catch (error) {
            dispatch({ type: DELETE_MENU_ITEM_FAILURE, payload: error });
        }
    };
};

// Search Menu Item
export const searchMenuItem = ({ query, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: SEARCH_MENU_ITEM_REQUEST });
        try {
            const { data } = await api.get(`api/food/search`, {
                params: { q: query },
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: SEARCH_MENU_ITEM_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: SEARCH_MENU_ITEM_FAILURE, payload: error });
        }
    };
};

// Update Menu Item Availability
export const updateMenuItemsAvailability = ({ menuItemId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST });
        try {
            const { data } = await api.put(`api/admin/food/${menuItemId}`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, payload: error });
        }
    };
};
