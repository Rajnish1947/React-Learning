import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

const TodoItems = ({ todoitems, onDeleteClick }) => {
  return (
    <div className={style.itemscontainer}>
      {todoitems.map((item, index) => (
        <TodoItem key={index} todoname={item.name} todoDate={item.duedate} onDeleteClick={onDeleteClick} /> 
        // item ka props use kar rahe hai
      ))}
    </div>
  );
};

export default TodoItems;


