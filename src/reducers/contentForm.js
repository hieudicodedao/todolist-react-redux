import * as types from '../variables/const';

let initialState = {
    id : '',
    name : 'define from reducer',
    status : true
}

const contentForm = (state = initialState , action) =>{
    switch(action.type){
        case types.PUSH_CONTENT_TO_FORM:
            let content = action.content;
            let newstate = {
                id : content.id,
                name : content.name,
                status : content.status
            }
            state = newstate
            return {...state}

        case types.DEFAULT_CONTENT_TO_FORM:
            let newstate2 = {
                id : '',
                name : '',
                status : true
            }
            state = newstate2
            return {...state}
        default : 
            return {...state}
    }
}

export default contentForm;