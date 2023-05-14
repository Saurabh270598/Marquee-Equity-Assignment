import { IAddtaskComponent } from "./interface";
import "./style.css";

const AddTaskComponent = (props: IAddtaskComponent) => {
  return (
    <div className="todo-input-wrapper">
      <input
        className="todo-input-container"
        value={props.todoText}
        onChange={(e) => props.setTodotext(e.target.value)}
        placeholder="Add Task..."
      />
      <button onClick={props.handleAddTask}>Add Task</button>
    </div>
  );
};
export default AddTaskComponent;
