import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_ORDERS_REQUEST } from "./ActionType"
import { api, API_URL } from "../../component/config/api";

export const createOrder = (reqData) =>{
    return async (dispatch) =>{
        dispatch({type : CREATE_ORDER_REQUEST})
        try {
            const {data} = await api.post('/api/order',reqData.order,{
                headers:{
                    Authorization:`Bearer ${reqData.jwt}`
                },
            })
            dispatch({type : CREATE_ORDER_SUCCESS},data)
        } catch (error) {
            dispatch({type : CREATE_ORDER_FAILURE},error)

        }
    }
}


export const getUserOrders = (jwt) =>{
    return async (dispatch) =>{
        dispatch({type : GET_USERS_ORDERS_REQUEST})
        try {
            const {data} = await api.post('/api/order',reqData.order,{
                headers:{
                    Authorization:`Bearer ${reqData.jwt}`
                },
            })
            dispatch({type : CREATE_ORDER_SUCCESS},data)
        } catch (error) {
            dispatch({type : CREATE_ORDER_FAILURE},error)

        }
    }
}