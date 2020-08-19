import * as types from '../variables/const'

export const showTable = () =>{
    return 0;
}

export const addNew = (value) =>{
    return {
        type : types.ADD_NEW,
        value
    }
}

export const toggle_form = () =>{
    return{
        type : types.TOGGLE_FORM
    }
}
export const open_form = () =>{
    return{
        type : types.OPEN_FORM
    }
}
export const close_form = () =>{
    return{
        type : types.CLOSE_FORM
    }
}

export const change_status = (id) =>{
    return{
        type :types.CHANGE_STATUS,
        id : id
    }
}

export const delete_button = (id) =>{
    return{
        type : types.DELETE_BUTTON,
        id :id
    }
}

export const push_content_to_form = (content) =>{
    return {
        type : types.PUSH_CONTENT_TO_FORM,
        content :content
    }
}

export const default_content_to_form = () =>{
    return {
        type : types.DEFAULT_CONTENT_TO_FORM
    }
}

export const tranfer_content_from_form_to_table = (new_content) =>{
    return {
        type : types.TRANSFER_DATA_FROM_FORM_TO_TABLE,
        new_content : new_content
    }
}
export const quick_lookup_table = (key,mode) =>{
    return {
        type : types.QUICK_LOOKUP_TABLE,
        key ,
        mode
    }
}

export const search_from_control = (keyword) =>{
    return {
        type: types.SEARCH_FROM_CONTROL,
        keyword
    }
}

export const sort_by = (sortname,sortstatus) =>{
    return {
        type : types.SORT_BY,
        sortname,
        sortstatus
    }
}