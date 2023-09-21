
import "./styles.css"
import {useState} from "react"

export default function App(){
{/*usestate hooks up react on top of page,
  you cant change value of state [newItem];
  use setItem to change, and update input when change happens.
   onChange is called everytime key is clicked.
  makes certain that you return exact output that you want 
  after all components are updated */}
  const [newItem, setNewItem] = useState("") 
  
  return (
  <>
  <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input 
      value={newItem}
      onChange={e => setNewItem(e.target.value)} 
      id="item" 
      type="text"
      />
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    <li>
      <label>
        <input type="checkbox"/>
        Item 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
    <li>
      <label>
        <input type="checkbox"/>
        Item 2
      </label>
      <button className="btn btn-danger">Delete</button>
    </li> 
  </ul>
  </>
  )
}