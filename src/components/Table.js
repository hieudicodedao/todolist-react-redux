import {connect} from 'react-redux'
import React, { Component } from 'react';
import TableItems from './TableItems';
import * as actions from '../actions';
class Table extends Component {

    constructor(props){
        super(props);
        this.state = {
            key: '',
            mode : -1      
        }
    }
    onFilter = (e) =>{
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.props.quick_lookup_table(
            name === 'key' ? value : this.state.key,
            name === 'mode' ? value : parseInt(this.state.mode)
        )
        
        this.setState({
            [name] :value 
        })
    }
    render() {
        let {tableData,quic_sort,search_control,sort_by} = this.props

        console.log(sort_by)

        tableData = tableData.filter((ele) =>{
            return ele.name.toLowerCase().indexOf(quic_sort.key.toLowerCase()) !== -1
        })
        if(quic_sort.mode === 1){
          tableData = tableData.filter((ele) =>{
             return ele.status === true
          })
        }
        if(quic_sort.mode === 0){
          tableData =tableData.filter((ele) =>{
             return ele.status === false
          })
        }
        tableData = tableData.filter((ele)=>{
            return ele.name.toLowerCase().indexOf(search_control.toLowerCase()) !== -1
        })



        if(sort_by.sortname === 'name' ){
            tableData = tableData.sort((a,b) =>{
               if(a.name  > b.name) return sort_by.sortstatus;
               else return -sort_by.sortstatus
            })
          }
        if(sort_by.sortname === 'status' ){
            tableData = tableData.sort((a,b) =>{
               if(a.status  < b.status) return sort_by.sortstatus;
               else return -sort_by.sortstatus
            })
          }

        let elementRS = tableData.map((ele,index)=>{
            return (<TableItems key = {index} 
            ele = {ele}
            index = {index}
            />)
        });    
        return (
            <table className="table table-bordered table-inverse mt-5">
                <thead className="thead-inverse">
                    <tr>
                        <th className="text-justify ">STT</th>
                        <th className="text-justify ">Ten </th>
                        <th className="text-justify ">Trang Thai</th>
                        <th className="text-justify "> Hanh Dong</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td ></td>
                        <td>
                            <div className="form-group">
                                <input type="text" className="form-control" name="key" value = {this.state.key} onChange = {this.onFilter}/>
                            </div>
                        </td>
                        <td>
                            <div className="form-group" >
                              <select className="form-control" name="mode" id="" onChange = {this.onFilter}>
                                <option value ={-1}>Tat Ca</option>
                                <option value = {0}>An</option>
                                <option value = {1}>Kich hoat</option>
                              </select>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                   
                    {elementRS} 
                        
                    
                </tbody>
            </table>

            
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        tableData  : state.tableData,
        quic_sort : state.quic_sort,
        search_control : state.search_control,
        sort_by : state.sort_by
    }
}
const mapDispatchToState = (dispatch,props) =>{
    return {
        quick_lookup_table : (key,mode) =>{
            dispatch(actions.quick_lookup_table(key,parseInt(mode)))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToState)(Table);