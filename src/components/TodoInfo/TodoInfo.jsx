import { useEffect, useState } from "react"
import {useNavigate, useParams } from 'react-router-dom';
import { getTodo } from "../TODO/todosApi";
import { useDispatch } from 'react-redux';
import { patchTodoRequestAction } from "../../store/actions/todos.actions";
function TodoInfo(){
    const [input, setInput] = useState();
    const [checked, setChecked] = useState();
    const {todoId} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
       async function init(){
        const {desc, status} = await getTodo(todoId)
        setInput(desc)
        setChecked(status)
       } 
       init()
    },[]);
    function onSave(){
        dispatch(patchTodoRequestAction({id: todoId, desc: input, status: checked}))
        navigate('/todos')
    }
    function onAbort(){
        navigate('/todos')
    }
    return(
    <div style={{display:"flex", justifyContent:"center"}}>
        <input type="checkbox" checked={checked?checked:false} onChange={(e)=>setChecked(e.target.checked)}></input>
        <input type="text" value={input?input:""} onChange={(e)=>setInput(e.target.value)}></input>
        <button type="button" onClick={onAbort}>back</button>
        <button type="button" onClick={onSave}>save</button>
    </div>
    )

}
export default TodoInfo