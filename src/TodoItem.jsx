import { useEffect, useState } from "react"

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, todoEditing, setTodoEditing }) {
  const [todo, setTodo] = useState("");
  
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  }


  return (
    <>
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>

      <label>
        <input
      {todo.id === todoEditing ? (
                    <input
                    type="text"
                    id="item"
                    onChange={e => setNewItem(e.target.value)}
                  />
                ) : (
                  <div>{todo.text}</div>
      )}
      />
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
      <button onClick={() => setTodoEditing(id)} className="btn btn-light">
        Edit
      </button>
    </li>
    </>
  )
}