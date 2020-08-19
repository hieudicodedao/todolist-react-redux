import { combineReducers } from 'redux'
import  changeTable  from './changeTable'
import isDisplayForm from './isDisplayForm'
import contentForm from './contentForm'
import quic_sort from './quic_sort'
import search_control from './search_control'
import sort_by from './sort_by'

export default combineReducers({
    tableData : changeTable,
    isDisplayForm ,// isDisplayForm : isDisplayForm
    contentForm,
    quic_sort,
    search_control,
    sort_by
})