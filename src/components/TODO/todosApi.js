const TODO_URL = 'http://localhost:3001/todos'

export async function getTodos() {
    const res = await fetch(TODO_URL);
    return res.json();
  }
  
  export async function createTodo(todo) {
    const res = await fetch(TODO_URL, {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    return res.json();
  }
  export async function deleteTodo(id) {
    const res = await fetch(`${TODO_URL}/`+id, {
      method: 'DELETE',
    });
    return res.json()
  }
    export async function patchTodo(props) {
        const res = await fetch(`${TODO_URL}/`+props.id, {
          method: 'PATCH',
          body:JSON.stringify(props),
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
    return res.json();
  }
  