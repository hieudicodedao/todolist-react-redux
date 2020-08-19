import * as types from '../variables/const'

let initialState = {
    sortname : 'name',
    sortstatus : 1
}

let myreducer = (state = initialState, action) =>{
    switch(action.type){
        case types.SORT_BY:
            return{
                sortname : action.sortname,
                sortstatus :action.sortstatus
            }
        default:
            return state
    }
}

export default myreducer