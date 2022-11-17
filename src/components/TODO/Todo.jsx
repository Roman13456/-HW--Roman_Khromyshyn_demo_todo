import { useDispatch,useSelector } from 'react-redux';
import TodoList from './TodoList/TodoList';
import FormInput from './FormInput/FormInput';
import { addTodosAction, addTodoAction, removeTodoAction,changeTodoAction } from '../../store/actions/todos.actions';
import { useEffect } from 'react';
import EditPopup from './EditPopup/EditPopup';

function Todo() {
  const todos = useSelector((state)=>state.todos.todos)
  const popup = useSelector((state)=>state.popup.status)
  console.log(popup)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addTodosAction([{
      status: false,
      desc:"demo 1",
      id:1
    }]))
  },[])
  function deleteTodo(id){
    dispatch(removeTodoAction(id))
  }
  function changeTodoStatus(id){
    const objIdx = todos.findIndex(e=>e.id === id);
    const todosCopy = [...todos]
    console.log(todosCopy[objIdx])
    todosCopy[objIdx].status = !todosCopy[objIdx].status
    dispatch(changeTodoAction(todosCopy))
  }
  function addTodoInfo(val){
    dispatch(addTodoAction({
      id:Date.now(),
      desc:val,
      status:false
    }))
  }
  return (
    <>
      {popup?<EditPopup/>:null} 
      <FormInput addTodo = {addTodoInfo}/>
      <TodoList todos={todos} delTodo = {deleteTodo} changeStatus = {changeTodoStatus} />
    </>
  );
}

export default Todo;