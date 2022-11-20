import { useState } from 'react';
function FormInput({addTodo}) {
  const [val,setInput] = useState("")
  function addNewTodo(){
    addTodo({
      desc: val,
      status: false
    });
    setInput("")
  }
  return (
    <form style={{display:"flex",justifyContent:"center"}}>
        <input value={val} onChange={(e)=>setInput(e.target.value)}></input>
        <button type='button' onClick={addNewTodo}>Add</button>
    </form>
    
  );
}

export default FormInput;