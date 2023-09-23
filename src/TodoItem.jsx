export function toDoItem({ completed, id, title }) {
    return (
        <li>
        <label>
          <input type="checkbox" 
          checked={todo.completed}
          onChange={e => toggleTodo(todo.id, e.target.checked)}/>
          {todo.title}
        </label>
        <button 
        //you should PASS A FUNCTION() so that it CALLS the deleteTodo, without () you are only calling deleteTodo and passing the result(doesnt work, deletes it right away when clicked, whereas you should wait to add aitem before deleting). //
        onClick={() => deleteTodo(todo.id)}
        className="btn btn-danger">Delete</button>
      </li> 
    )
}