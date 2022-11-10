import './App.css';
import { useState } from 'react';
import UserInput from './components/UserInput';
import TodoList from './components/TodoList';

function App() {
  const [todos,setTodos] = useState([{
    status: false,
    desc:"demo 1",
    id:1
  },{
    status: true,
    desc:"demo 2",
    id:2
  },{
    status: false,
    desc:"demo 3",
    id:3
  },{
    status: true,
    desc:"demo 4",
    id:4
  }])
  function deleteTodo(id){
    const objIdx = todos.findIndex(e=>e.id === id);
    const todosCopy = [...todos]
    todosCopy.splice(objIdx,1)
    setTodos(todosCopy)
  }
  function changeTodoStatus(id){
    const objIdx = todos.findIndex(e=>e.id === id);
    const todosCopy = [...todos]
    console.log(todosCopy[objIdx])
    todosCopy[objIdx].status = !todosCopy[objIdx].status
    setTodos(todosCopy)
  }
  function addTodo(val){
    setTodos([...todos,{
      id:Date.now(),
      desc:val,
      status:false
    }])
  }
  return (
    <div className="App">
      <UserInput addTodo = {addTodo}/>
      <TodoList todos={todos} delTodo = {deleteTodo} changeStatus = {changeTodoStatus} />
    </div>
  );
}

export default App;
