import * as types from '../variables/const'

let initialState = false;

let isDisplayForm = (state = initialState,action) =>{
    switch(action.type){
        case types.TOGGLE_FORM:
            if(state === false) state = true
            return state
        case types.OPEN_FORM:
            state = true;
            return state
        case types.CLOSE_FORM:
            state =false;
            return state
            default: 
                return state
    }
}

export default isDisplayForm