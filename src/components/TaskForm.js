import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index'
import contentForm from '../reducers/contentForm';
class TaskForm extends Component {
    constructor(props){
        super(props);  
        if(props && props.contentForm){
            this.state = {
                id : props.contentForm.id,
                name : props.contentForm.name,
                status : props.contentForm.status
            }
        } 
        else {
            this.state = {
                id : '',
                name : '',
                status : false
            }
        }
    }
    
    componentWillReceiveProps(props){
        if(props && props.contentForm){
            this.setState({
                id : props.contentForm.id,
                name : props.contentForm.name,
                status : props.contentForm.status
            })
        }
    }
    onSubmit = (e) =>{
        e.preventDefault();
        if(this.state.id === ''){
            this.props.onAddNew(this.state);
            this.onCloseForm();
        }
        else {
            this.props.onTranferContentFormToTable(this.state);
            this.onCloseForm();
        }
    }
    change = (e) =>{
        let target = e.target;
        let name = target.name;
        let value = target.value; 
        if(name === 'status' )  value = target.value ==='true' ? true : false 
        this.setState({
            [name] : value  
        })
    }
    onCloseForm = () =>{
        this.props.onCloseForm()  
    }
    
    render() {
        return (
            <div className="card mt-4" >
                <div className="card-header">
                        <p className="float-left">{this.state.id === '' ? 'Them Cong Viec' : 'Sua Cong viec'}</p>
                        <button className="float-right"  onClick = {this.onCloseForm}>x</button>
                </div>
                <div className="card-body">
                    <form className="form" onSubmit = {this.onSubmit}>
                        <div className="form-group">
                            <label >Ten :</label>
                                <input type="text" 
                                        name="name"  
                                        className="form-control" 
                                        value={this.state.name}
                                        onChange = {this.change}
                                        />
                        </div>
                        <div  className="form-group"  > 
                                <label >Trang thai :</label>
                                <select className="form-control" 
                                        name="status"
                                        value = {this.state.status}  
                                        onChange = {this.change}                                      
                                >
                                    <option value = {true}>Kich Hoat</option>
                                    <option value = {false}>An</option>
                                </select>
                        </div>
                        <button type="submit" className="btn btn-primary ml-5">Luu Lai</button>
                        <button type="reset" className="btn btn-primary ml-4" onClick = {this.onCloseForm}>Huy Bo</button>
                    </form>

                </div>
            </div>
        );
    }
}
let mapStateToProps = state =>{
    return {
        contentForm : state.contentForm
    }
}

let mapDispatchToProps = (displatch ,value) =>{
    return {
        onAddNew : (value) =>{
            displatch(actions.addNew(value))
        },
        onCloseForm : () =>{
            displatch(actions.close_form())
        },
        onTranferContentFormToTable : (new_content) =>{
            displatch(actions.tranfer_content_from_form_to_table(new_content))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);