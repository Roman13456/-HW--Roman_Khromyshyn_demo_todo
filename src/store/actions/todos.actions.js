import {getTodos, createTodo ,deleteTodo ,patchTodo} from '../../components/TODO/todosApi'
export const ADD_TODOS = 'ADD_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const CHANGE_TODO = 'CHANGE_TODO'
function addTodosAction(payload){
    return {
        type: ADD_TODOS,
        payload
    }
}
function addTodoAction(payload){
    return {
        type: ADD_TODO,
        payload
    }
}
function removeTodoAction(payload){
    return {
        type: REMOVE_TODO,
        payload
    }
}
function changeTodoAction(payload){
    return {
        type: CHANGE_TODO,
        payload
    }
}
export function addTodosRequestAction(){
    return async (dispatch)=>{
        const todos = await getTodos()
        console.log(todos)
        dispatch(addTodosAction(todos))
    }
}
export function addTodoRequestAction(todo){
    return async (dispatch)=>{
        const todoInfo = await createTodo(todo)
        dispatch(addTodoAction(todoInfo))
    }
}
export function removeTodoRequestAction(id){
    return async (dispatch)=>{
        await deleteTodo(id)
        dispatch(removeTodoAction(id))
    }
}
export function patchTodoRequestAction(obj){
    return async (dispatch)=>{
        const params = obj
        const todo = await patchTodo(params)
        dispatch(changeTodoAction(todo))
    }
}
export function changeTodoRequestAction(id){
    return async (dispatch,getState)=>{
        const state = getState()
        const todoInfo = state.Todo.todos.find((todo)=>todo.id ===id)//у нас ведь todos хранит стейт с todos
        todoInfo.status = !todoInfo.status
        const todo = await patchTodo(todoInfo)
        dispatch(changeTodoAction(todo))
    }
}


export {addTodosAction,addTodoAction,removeTodoAction,changeTodoAction}

