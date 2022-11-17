import TodoItem from '../TodoItem/TodoItem';

function TodoList({todos,delTodo,changeStatus}) {
  return (
    <ul>
        {todos.map((item)=>{
            return <TodoItem key={item.id} item={item} onDelete={delTodo} onChange = {changeStatus}/>
        })}
    </ul>
  );
}

export default TodoList;