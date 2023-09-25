
import "./styles.css"
import {useState} from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App(){
{/*usestate hooks up react on top of page,
  you cant change value of state [newItem];
  use setItem to change, and update input when change happens.
   onChange is called everytime key is clicked.
  makes certain that you return exact output that you want 
  after all components are updated */}

  const [todos, setTodos] = useState([])

  function addTodo(title){
        setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, 
          completed: false},
      ]
    })
  }

  function handleSubmit(e){
    e.preventDefault()

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title: newItem, 
          completed: false},
      ]
    })
    setNewItem('')
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return{ ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
      })
  }
  
  return (
  <>
  <NewTodoForm onSubmit={addTodo}/>
  {/* match prop onSubmit to the one in newtodoform */}
  <h1 className="header">Todo List</h1>
  <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  </>
  )
}