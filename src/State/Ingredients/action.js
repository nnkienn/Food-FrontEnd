import {
    GET_INGREDIENTS,
    UPDATE_STOCK,
    CREATE_INGREDIENT_REQUEST,
    CREATE_INGREDIENT_SUCCESS,
    CREATE_INGREDIENT_FAILURE,
    CREATE_INGREDIENT_CATEGORY_REQUEST,
    CREATE_INGREDIENT_CATEGORY_SUCCESS,
    CREATE_INGREDIENT_CATEGORY_FAILURE,
    GET_INGREDIENT_CATEGORY_REQUEST,
    GET_INGREDIENT_CATEGORY_SUCCESS,
    GET_INGREDIENT_CATEGORY_FAILURE,
} from "./ActionType";
import api from "../../api"; // Đảm bảo bạn import đúng `api` utility

// Lấy danh sách nguyên liệu của một nhà hàng
export const getIngredientsOfRestaurant = ({ jwt, id }) => async (dispatch) => {
    try {
        const { data } = await api.get(`/api/admin/ingredients/restaurant/${id}`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        dispatch({ type: GET_INGREDIENTS, payload: data });
    } catch (error) {
        console.log("Error fetching ingredients:", error.message);
        dispatch({
            type: GET_INGREDIENT_CATEGORY_FAILURE,
            payload: error.message || "Unable to fetch ingredients.",
        });
    }
};

// Cập nhật số lượng tồn kho
export const updateStock = (ingredientId, jwt) => async (dispatch) => {
    try {
        const { data } = await api.put(`/api/admin/ingredients/${ingredientId}/stock`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        dispatch({
            type: UPDATE_STOCK,
            payload: data,
        });
    } catch (error) {
        console.log("Error updating stock:", error.message);
    }
};

// Tạo mới một nguyên liệu
export const createIngredient = ({ingredient, jwt}) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_INGREDIENT_REQUEST });
        const { data } = await api.post("/api/admin/ingredients", ingredient, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        dispatch({ type: CREATE_INGREDIENT_SUCCESS, payload: data });
    } catch (error) {
        console.log("Error creating ingredient:", error.message);
        dispatch({
            type: CREATE_INGREDIENT_FAILURE,
            payload: error.message || "Unable to create ingredient.",
        });
    }
};

// Tạo mới một danh mục nguyên liệu
export const createIngredientCategory = ({category, jwt}) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_INGREDIENT_CATEGORY_REQUEST });
        const { data } = await api.post("/api/admin/ingredients/category", category, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        dispatch({ type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: data });
    } catch (error) {
        console.log("Error creating ingredient category:", error.message);
        dispatch({
            type: CREATE_INGREDIENT_CATEGORY_FAILURE,
            payload: error.message || "Unable to create ingredient category.",
        });
    }
};

// Lấy danh sách các danh mục nguyên liệu
export const getIngredientCategories = ({jwt,id}) => async (dispatch) => {
    try {
        dispatch({ type: GET_INGREDIENT_CATEGORY_REQUEST });
        const { data } = await api.get(`/api/admin/ingredients/restaurant/${id}/category`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        dispatch({ type: GET_INGREDIENT_CATEGORY_SUCCESS, payload: data });
    } catch (error) {
        console.log("Error fetching ingredient categories:", error.message);
        dispatch({
            type: GET_INGREDIENT_CATEGORY_FAILURE,
            payload: error.message || "Unable to fetch ingredient categories.",
        });
    }
};
