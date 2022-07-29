import { GET_TEXT } from "../actions/actions"


export const initialState={

    texts: [],
    
}



export function rootReducer(state = initialState, action){

switch(action.type){
case GET_TEXT:
    return{
        ...state,
        texts:action.payload
    };
    
default: 
return state;


};


}

export default rootReducer;