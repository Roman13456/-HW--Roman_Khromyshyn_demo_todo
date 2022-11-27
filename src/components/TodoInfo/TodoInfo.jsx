import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { getTodo } from "../TODO/todosApi";
import { useDispatch } from 'react-redux';
import { patchTodoRequestAction} from "../../store/actions/todos.actions";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from 'yup'
import SubmitBtn from "../shared/ui/SubmintBtn";
function TodoInfo() {
    const initValues = {
        desc: "",
        status: false
    }
    const [todo, setTodo] = useState(initValues);
    const { todoId } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        async function init() {
            const todoInfo = await getTodo(todoId)
            setTodo(todoInfo)
        }
        init()
    }, []);
    const todoSchema = yup.object().shape({
        desc: yup.string().required().min(2).max(7),//чомусь не працює string, цифри також приймає
        status: yup.boolean().required()
    })
    function onSave({ desc, status }) {
        dispatch(patchTodoRequestAction({ id: todoId, status, desc }))
        navigate('/todos')
    }
    function onAbort() {
        navigate('/todos')
    }
    return (
        <Formik
            initialValues={todo}
            onSubmit={onSave}
            enableReinitialize={true}
            validationSchema={todoSchema}>
            {
                <Form style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                    <div>
                        <div style={{ display: "flex" }}>
                            <Field type="checkbox" name="status" />
                            <Field type="text" name="desc" />
                        </div>
                        <ErrorMessage name="desc" />
                    </div>
                    <button type="button" onClick={onAbort}>back</button>
                    <SubmitBtn />
                </Form>

            }
        </Formik>
    )

}
export default TodoInfo