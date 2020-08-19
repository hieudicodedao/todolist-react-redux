import React, { Component } from 'react';
import * as actions from '../actions/index'
import {connect} from 'react-redux'
class Table_items extends Component {
    onChangeStatus = () =>{
        this.props.onChangeStatus(this.props.ele.id)
    }
    onDeleteButton = () =>{
        this.props.onDeleteButton(this.props.ele.id)
    }
    // onOpenForm = () =>{
    //     this.props.onOpenForm()
    // }
    // onPushContentToForm = ()=>{
    //     this.props.onPushContentToForm(this.props.ele)
    // }

    OpenFormAndPushContent = () =>{
        this.props.onOpenForm();
        this.props.onPushContentToForm(this.props.ele);
    }
    render() {
        return (
            <tr key = {this.props.id}>
                        <td >{this.props.index + 1 }</td>
                        <td>{this.props.ele.name}</td>
                        <td onClick = {this.onChangeStatus}>{this.props.ele.status === true ? 'Kich Hoat' : 'An'}</td>
                        <td>
                            <button type="button" className="btn btn-primary ml-3"
                                    onClick = {this.OpenFormAndPushContent}
                                   
                                >Sua</button>
                            <button type="button" className="btn btn-success ml-3" onClick = {this.onDeleteButton}
                                    
                                >Xoa</button>
                        </td>
                    </tr>
        );
    }
}


let mapStateToProps = state =>{
    return{
    }
}
let mapDispatchToState = (dispatch,props) =>{
    return{
        onOpenForm : () =>{
            dispatch(actions.open_form())
        },
        onChangeStatus : (id) =>{
            dispatch(actions.change_status(id))
        },
        onDeleteButton : (id) =>{
            dispatch(actions.delete_button(id))
        },
        onPushContentToForm : (content)=>{
            dispatch(actions.push_content_to_form(content))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToState)(Table_items);