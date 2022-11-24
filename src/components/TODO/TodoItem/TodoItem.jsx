import {useNavigate} from 'react-router-dom';
function TodoItem({item,onDelete,onChange}) {
    function onChangeStatus(e,id){
        e.target.classList.toggle("completed")
        console.log(e.target)
        onChange(id)
    }
    const navigate = useNavigate()
  return (
  <li className={item.status?"completed":""} style={{display:"flex"}}>
        <div>
            <input id = {item.id} type={"checkbox"} checked={item.status} onChange={(e)=>onChangeStatus(e,item.id)}></input>
            <label htmlFor={item.id}>{item.desc}</label>
        </div>
        <button type='button' onClick={()=>onDelete(item.id)}>del</button>
        <button type='button' onClick={()=>navigate("/todo/"+item.id)}>edit</button>
    </li>
  )}



export default TodoItem;