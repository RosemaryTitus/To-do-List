import React, { useState } from "react";

function App() {
  const[item,setItem]=useState(" ");
  const[Newitem,ItemList]=useState([])
function itemChanged(event)
{
 const currentitem=event.target.value;
 setItem(currentitem);
}
function EnterItem()
{
  ItemList((prevList => {return[...prevList,item]}))
  setItem(" ")
}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={itemChanged} value={item} />
        <button onClick={EnterItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
         { Newitem.map(todolist=> <li>{todolist}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
