import {ADD_TODOS, ADD_TODO,REMOVE_TODO,CHANGE_TODO } from "../actions/todos.actions";



const initialState = {
    todos:[]
}
export default function todoReducer(state=initialState,{type,payload}){
    console.log(type)
    switch(type){
        
        case ADD_TODOS:
            return {...state,todos:[...payload]}
        case ADD_TODO:
            return {...state,todos:[...state.todos,payload]}
        case REMOVE_TODO:
            const todoIdx = state.todos.findIndex((e)=>e.id===payload)
            const todosCopy = [...state.todos]
            todosCopy.splice(todoIdx,1)
            return {...state,todos:[...todosCopy]}
        case CHANGE_TODO:
            return {...state,todos:payload}
        default:
            return state
    }

}