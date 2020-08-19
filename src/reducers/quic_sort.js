import * as types from '../variables/const'

let initialState  ={
    key : '',
    mode :-1
}

let MyReducer = (state  =initialState,action) =>{
    switch(action.type){
        case types.QUICK_LOOKUP_TABLE:  
            return {
                key : action.key,
                mode : action.mode
            }

        default:
            return {...state}
    }
}

export default MyReducer