import { ADD_TASK } from "../Constants/ActionTypes";

const initialState={
    listItems:[]
}

export const reducerTask=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_TASK:
           return {...state, listItems :[...state.listItems,action.payload]}
            
            
    
        default:
            return state
            ;
    }
}