import * as actionTypes from './actionTypes';

export const changeInputAction = (value)=>{
    return {
        type:actionTypes.CHANGE_INPUT_VALUE,
        value
    }
}

export const addItemAction = ()=>{
    return {
        type:actionTypes.SUBMIT_INPUT_VALUE
    }
}

export const delItemAction = (index)=>{
    return {
        type:actionTypes.DEL_LIST_ITEM,
        index
    }
}