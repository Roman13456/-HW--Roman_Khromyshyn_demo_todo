export const VISIBILITY_ACTION="VISIBILITY_ACTION"
export const EDIT_TODO_ACTION="EDIT_TODO_ACTION"
function visibilityAction(){
    return{
        type:VISIBILITY_ACTION
    }
}
function editTodoAction(payload){
    return{
        type:EDIT_TODO_ACTION,
        payload
    }
}

export {visibilityAction,editTodoAction}