import { VISIBILITY_ACTION, EDIT_TODO_ACTION } from "../actions/popup.actions"




const initialState = {
    status: false,
    todo:{}
}

export default function popupReducer(state=initialState,{type,payload}){
    console.log(type,state)
    switch(type){
        case VISIBILITY_ACTION:
            return {...state,status:!state.status}
        case EDIT_TODO_ACTION:
            return {...state,status:!state.status,todo:payload}
        default:
            return state
    }
}