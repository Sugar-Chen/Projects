import * as actionTypes from './actionTypes';

// initalize state
const defaultState = {
    inputValue:'',
    list:[]
}

//export the function returned a newState to store 
export default (state = defaultState,action)=>{
    const type = action.type;
    // const newState = JSON.parse(JSON.stringify(state));//deep copy
    const newState = Object.assign(state);
    //4--change state and return newState
    switch(type){
        case actionTypes.CHANGE_INPUT_VALUE:
            newState.inputValue = action.value;
            return newState;
        case actionTypes.SUBMIT_INPUT_VALUE:
            newState.list.push(state.inputValue);
            newState.inputValue = '';
            return newState;
        case actionTypes.DEL_LIST_ITEM:
            newState.list.splice(action.index,1);
            return newState;
        default:
            return state;
    }
}