import { MdDelete } from "react-icons/md";
// It takes three props: todoname, todoDate, and onDeleteClick
function TodoItem({ todoname, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
         {/* When the button is clicked, it calls the onDeleteClick function with the todoname as an argument */}
          <button type="button" className="btn btn-danger kg-button" onClick={() => onDeleteClick(todoname)}>
          <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;


