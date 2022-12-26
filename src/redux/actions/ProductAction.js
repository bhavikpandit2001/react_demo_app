import { ActionTypes } from "../constants/ActionTypes"

export const setProducts = (products) =>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const seletedProducts = (products) =>{
    return{
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products
    }
}
export const deleteProducts = (products) =>{
    return{
        type: ActionTypes.DELETE_SELECTED_PRODUCTS,
        payload: products
    }
}
