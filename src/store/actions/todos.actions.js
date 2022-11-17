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
export {addTodosAction,addTodoAction,removeTodoAction,changeTodoAction}

