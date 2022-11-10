import './App.css';
import { useState } from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';
// При загрузке страницы нужно вывести список всех todos.
// Реализовать создание новых задач. 
// При создании туду нужно обновить стейт
// Реализовать изменение статуса todo при клике по todo item. При изменении на complited статуса, поменять цвет item на зеленый. Изменение статуса должно работать как toggle.  
// При изменении статуса нужно обновить ui и стейт
// Реализовать удаление todo
// Обновление UI и стейта

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
      <Input addTodo = {addTodo}/>
      <TodoList todos={todos} delTodo = {deleteTodo} changeStatus = {changeTodoStatus} />
    </div>
  );
}

export default App;
