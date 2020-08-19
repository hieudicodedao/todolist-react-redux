import * as types from '../variables/const'

let initialState = '';

let MyReducer = (state = initialState ,action) =>{
    switch(action.type){
        case types.SEARCH_FROM_CONTROL:
            console.log(action);
        return action.keyword;
        default :
            return state
    }
}

export default MyReducer