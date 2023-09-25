export function ToDoItem({ completed, id, title, 
    toggleTodo, deleteTodo }) {
    return (
        <li>
        <label>
          <input type="checkbox" 
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}/>
          {title}
        </label>
        <button 
        //you should PASS A FUNCTION() so that it CALLS the deleteTodo, without () you are only calling deleteTodo and passing the result(doesnt work, deletes it right away when clicked, whereas you should wait to add aitem before deleting). //
        onClick={() => deleteTodo(id)}
        className="btn btn-danger">Delete</button>
      </li> 
    )
}