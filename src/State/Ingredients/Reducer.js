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
    GET_INGREDIENT_CATEGORY_FAILURE 
} from "./ActionType";

const initialState = {
    loading: false,
    ingredients: [],
    categories: [],
    error: null,
    lastUpdatedStock: null // Thêm để lưu thông tin cập nhật cuối
};

const ingredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_INGREDIENT_REQUEST:
        case CREATE_INGREDIENT_CATEGORY_REQUEST:
        case GET_INGREDIENT_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case CREATE_INGREDIENT_SUCCESS:
            return {
                ...state,
                loading: false,
                ingredients: [...state.ingredients, action.payload]
            };

        case CREATE_INGREDIENT_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: [...state.categories, action.payload]
            };

        case GET_INGREDIENT_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload
            };

        case CREATE_INGREDIENT_FAILURE:
        case CREATE_INGREDIENT_CATEGORY_FAILURE:
        case GET_INGREDIENT_CATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case GET_INGREDIENTS:
            return {
                ...state,
                loading: false,
                ingredients: action.payload
            };

        case UPDATE_STOCK:
            return {
                ...state,
                lastUpdatedStock: action.payload, // Lưu lần cập nhật cuối
                ingredients: state.ingredients.map((item) =>
                    item.id === action.payload.id ? { ...item, stock: action.payload.stock } : item
                )
            };

        default:
            return state;
    }
};

export default ingredientReducer;
