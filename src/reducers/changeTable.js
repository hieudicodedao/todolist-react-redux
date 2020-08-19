import * as types from '../variables/const';
var randomstring = require("randomstring");
let data = JSON.parse(localStorage.getItem('data'))
let initialState = data ? data : []

let showTable = (state = initialState , action)=>{
    switch (action.type) {
        case types.SHOW_TABLE:
            return state   
            // =============== 
        case types.ADD_NEW:
            let {value} = action;
            console.log(value);
            if(value.id === ''){
                let newData = {
                    id : randomstring.generate(),
                    name : value.name,
                    status : value.status
                }
                state.push(newData)
                localStorage.setItem('data',JSON.stringify(state));             
            }else{
                let newdataTable = [];
                for(let i =0;i<state.length;++i){
                    if(state[i].id === value.id){
                    let ele ={
                        id : value.id,
                        name : value.name,
                        status : value.status
                    }
                    newdataTable.push(ele)
                    }
                    else newdataTable.push(state[i])
                }
                localStorage.setItem('data',JSON.stringify(newdataTable));
            }
            return [...state]
            // =============== 

        case types.CHANGE_STATUS:        
            let new_ele,index;  
            for(let i=0;i<state.length;++i){
                if(state[i].id === action.id){
                   index = i;
                    break;
                }
            }
            new_ele = {
                ...state[index],
                status : !state[index].status
            }
            state[index] = new_ele;
            localStorage.setItem('data',JSON.stringify(state));
            return [...state]
            // =============== 

        case types.DELETE_BUTTON:
            let i ;
            for(i=0;i< state.length ;++i){
                if(state[i].id === action.id)
                {
                    break;
                }
            }
            state.splice(i,1);
            localStorage.setItem('data',JSON.stringify(state));
            return [...state]
        
            
            // =============== 
        case types.TRANSFER_DATA_FROM_FORM_TO_TABLE:

            let new_content = action.new_content
            let index2
            for(index2 =0 ;index2 < state.length ;++index2){
                if(state[index2].id === new_content.id) break;
            }
            state[index2] = new_content
            return [...state]

            // =============== 


        
        default:
            return [...state]         
    }
}

export default showTable