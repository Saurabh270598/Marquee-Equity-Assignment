import { Fragment, useState } from "react";
import { IMaintaskComponent } from "../addTask/interface";
import "./style.css";

const MainComponent = (props: IMaintaskComponent) => {
  const [isSubTaskOpen, setIsSubTaskOpen] = useState<boolean>(false);
  const [isSubTaskvalue, setIsSubTaskValue] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [checkedChild, setCheckedChild] = useState<boolean>(false);

  const handleAddSubtask = () => {
    if (isSubTaskvalue.trim().length) {
      props.handleAddSubtask && props.handleAddSubtask("", isSubTaskvalue);
      setIsSubTaskOpen(false);
      setIsSubTaskValue("");
    }
  };

  return (
    <Fragment>
      <div className="sub-task-wrapper">
        <input type="checkbox" onClick={() => setChecked(!checked)} />
        <span className={checked ? "checked-todo" : ""}>
          {props.value}
          <span
            className="add-subtask"
            onClick={() => setIsSubTaskOpen(!isSubTaskOpen)}
          >
            + Add SubTask
          </span>
        </span>
        {Object.values(props.subtaskValue).length > 0 && (
          <div className="sub-task-list-container">
            {Object.values(props.subtaskValue).map((subtask, index) => {
              const subtaskValue =
                typeof subtask === "string" ? subtask : subtask.value;
              return (
                <div className="sub-task-input-container">
                  <input
                    onClick={() => setCheckedChild(!checkedChild)}
                    type="checkbox"
                  />
                  <span className={checkedChild ? "checked-todo" : ""}>
                    {subtaskValue}
                  </span>
                </div>
              );
            })}
          </div>
        )}
        {isSubTaskOpen ? (
          <div className="todo-input-wrapper">
            <input
              type="text"
              value={isSubTaskvalue}
              onChange={(e) => setIsSubTaskValue(e.target.value)}
              placeholder="Add Subtask..."
            />
            <button onClick={handleAddSubtask}>Add Subtask</button>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default MainComponent;
