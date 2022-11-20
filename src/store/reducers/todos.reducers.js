import {ADD_TODOS, ADD_TODO,REMOVE_TODO,CHANGE_TODO } from "../actions/todos.actions";



const initialState = {
    todos:[]
}
export default function todoReducer(state=initialState,{type,payload}){
    console.log(type)
    switch(type){
        case ADD_TODOS:
            console.log(payload,state)
            return {...state,todos:[...payload]}
        case ADD_TODO:
            return {...state,todos:[...state.todos,payload]}
        case REMOVE_TODO:
            return {...state,todos:state.todos.filter(todo=>todo.id!==payload)}
        case CHANGE_TODO:
            return {...state,todos:state.todos.map((todo)=>{
                if(todo.id===payload.id){
                    return payload
                }
                return todo
            })}
        default:
            return state
    }

}