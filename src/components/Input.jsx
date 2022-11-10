import { useState } from 'react';
// При загрузке страницы нужно вывести список всех todos.
// Реализовать создание новых задач. 
// При создании туду нужно обновить стейт
// Реализовать изменение статуса todo при клике по todo item. При изменении на complited статуса, поменять цвет item на зеленый. Изменение статуса должно работать как toggle.  
// При изменении статуса нужно обновить ui и стейт
// Реализовать удаление todo
// Обновление UI и стейта

function Input({addTodo}) {
  const [val,setInput] = useState("")
  function addNewTodo(){
    addTodo(val);
    setInput("")
  }
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        <input value={val} onChange={(e)=>setInput(e.target.value)}></input>
        <button type='button' onClick={addNewTodo}>Add</button>
    </div>
    
  );
}

export default Input;