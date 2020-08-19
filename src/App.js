import React , { Component }from 'react';
import './App.css';
import Control from './components/Control'
import Table from './components/Table'
import TaskForm from './components/TaskForm';
import {connect} from 'react-redux'

class App extends Component {
  render(){
    var {isDisplayForm} = this.props;
    var eleTaskform = isDisplayForm === true ? 
                <div className = "col-sm-4">
                  <TaskForm 
                  /></div> 
                  : '';
    return (   
      <div className="container">
          <div className="row">
          <h1 className = "head">Quan Ly Cong Viec</h1>
          
          </div>
          <div className="row lineThrough"></div>

          <div className="row">
              {eleTaskform}
              <div className={isDisplayForm === true ? "col-sm-8" : ""}>
                  <Control 
                            keyword = {this.keyword}
                            sortModify = {this.sortModify}
                          />
                  <Table 
                          onFilter = {this.onFilter}
                  />
              </div>
          </div>
      </div>
    );
  }
}

let mapStateToProps = state =>{
  return {
    isDisplayForm : state.isDisplayForm
  }
}
export default connect(mapStateToProps,null)(App);
