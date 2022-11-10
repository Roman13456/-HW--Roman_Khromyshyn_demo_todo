import { useState } from 'react';
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