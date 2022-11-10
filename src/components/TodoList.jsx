import { useState } from 'react';
// При загрузке страницы нужно вывести список всех todos.
// Реализовать создание новых задач. 
// При создании туду нужно обновить стейт
// Реализовать изменение статуса todo при клике по todo item. При изменении на complited статуса, поменять цвет item на зеленый. Изменение статуса должно работать как toggle.  
// При изменении статуса нужно обновить ui и стейт
// Реализовать удаление todo
// Обновление UI и стейта

function TodoList({todos,delTodo,changeStatus}) {
    function onChange(e,id){
        e.target.classList.toggle("completed")
        console.log(e.target)
        changeStatus(id)
    }
  return (
    <ul>
        {todos.map(({desc,status,id})=>{
            return <li className={status?"completed":""} key={id} style={{display:"flex"}}>
                <div>
                    <input id = {id} type={"checkbox"} checked={status} onChange={(e)=>onChange(e,id)}></input>
                    <label htmlFor={id}>{desc}</label>
                </div>
                <button type='button' onClick={()=>delTodo(id)}>del</button>
            </li>
        })}

    </ul>
  );
}

export default TodoList;