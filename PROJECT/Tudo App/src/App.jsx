import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import Todoitems1 from "./component/Todoitem1";
import Todoitems2 from "./component/TodoItems2";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <div>
        <Todoitems1 />
        <Todoitems2 />
      </div>
    </center>
  );
}

export default App;
