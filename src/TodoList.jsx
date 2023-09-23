import { toDoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}){
    return(
        <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo =>{
          return (
            <TodoItem 
            id={todo.id} 
            completed={todo.completed}
            title={todo.title} //or use {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />
        )
       })}
      </ul>
    )
}