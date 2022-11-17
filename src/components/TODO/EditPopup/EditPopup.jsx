import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux/es/exports';
import { visibilityAction } from '../../../store/actions/popup.actions';
function EditPopup({addTodo}) {
    const [val, setVal] = useState('')
    const dispatch = useDispatch()
    const status = useSelector((state)=>state.popup)
    let str;
    useEffect(()=>{
        str = status.value
    },[])
  return (
    <div style={{
        position : "fixed",
        margin: "auto",
        maxWidth: "300px",
        inset: 0,
        backgroundColor: "aliceblue"
    }}>
        <button type='button' onClick={()=>dispatch(visibilityAction())}>close</button>
        <p>Type new todo:</p>
        <input type={"text"} value={val} onChange={(event)=>setVal(event.target.value)}></input>
        <button type='button'>Edit</button>
    </div>
    
  );
}

export default EditPopup;
