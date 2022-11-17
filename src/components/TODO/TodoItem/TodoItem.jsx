import { useDispatch } from "react-redux/es/exports"
import { editTodoAction } from "../../../store/actions/popup.actions"
function TodoItem({item,onDelete,onChange}) {
  const dispatch = useDispatch()
    function onChangeStatus(e,id){
        e.target.classList.toggle("completed")
        console.log(e.target)
        onChange(id)
    }
  return (
  <li className={item.status?"completed":""} style={{display:"flex"}}>
        <div>
            <input id = {item.id} type={"checkbox"} checked={item.status} onChange={(e)=>onChangeStatus(e,item.id)}></input>
            <label htmlFor={item.id}>{item.desc}</label>
        </div>
        <button type='button' onClick={()=>onDelete(item.id)}>del</button>
        <button type='button' onClick={()=>dispatch(editTodoAction(item))}>Edit</button>
    </li>
  )}



export default TodoItem;