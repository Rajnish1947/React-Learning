import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import Welcome from "./component/Welcome";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItems = (itemName, itemDueDate) => {
  
    setTodoItems([...todoItems, { name: itemName, duedate: itemDueDate }]);
  };

  const handleDelete = (itemName) => {
   
    setTodoItems(todoItems.filter(item => item.name !== itemName));
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItems} />
      {todoItems.length === 0 && <Welcome />}
      <TodoItems todoitems={todoItems} onDeleteClick={handleDelete} />
    </center>
  );
}

export default App;
