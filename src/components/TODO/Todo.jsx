import { useDispatch,useSelector } from 'react-redux';
import TodoList from './TodoList/TodoList';
import FormInput from './FormInput/FormInput';
import {addTodoRequestAction, removeTodoRequestAction,changeTodoRequestAction,addTodosRequestAction } from '../../store/actions/todos.actions';
import { useEffect } from 'react';

function Todo() {
  const todos = useSelector((state)=>state.Todo.todos)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addTodosRequestAction()) 
  },[])
    function removeTodo(id){
        dispatch(removeTodoRequestAction(id))   
    }
  async function changeTodoStatus(id){
      dispatch(changeTodoRequestAction(id))
  }
  async function addTodoInfo(todo){
    dispatch(addTodoRequestAction(todo))
  }
  return (
    <>
      <FormInput addTodo = {addTodoInfo}/>
      <TodoList todos={todos} delTodo = {removeTodo} changeStatus = {changeTodoStatus} />
    </>
  );
}

export default Todo;