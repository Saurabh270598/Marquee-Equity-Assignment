import { Fragment, useState } from "react";
import { IMaintaskComponent } from "../addTask/interface";

const MainComponent = (props: IMaintaskComponent) => {
  const [isSubTaskOpen, setIsSubTaskOpen] = useState<boolean>(false);
  const [isSubTaskvalue, setIsSubTaskValue] = useState<string>("");

  const handleAddSubtask = () => {
    props.handleAddSubtask && props.handleAddSubtask("", isSubTaskvalue);
    setIsSubTaskOpen(false);
    setIsSubTaskValue("");
  };

  return (
    <Fragment>
      <div>
        <input type="checkbox" />
        <span onClick={() => setIsSubTaskOpen(!isSubTaskOpen)}>
          {props.value}
        </span>
        {Object.values(props.subtaskValue).length > 0 && (
          <div className="sub-task-list-container">
            {Object.values(props.subtaskValue).map((subtask, index) => {
              const subtaskValue =
                typeof subtask === "string" ? subtask : subtask.value;
              return (
                <div>
                  <input type="checkbox" />
                  {subtaskValue}
                </div>
              );
            })}
          </div>
        )}
        {isSubTaskOpen ? (
          <>
            <input
              type="text"
              value={isSubTaskvalue}
              onChange={(e) => setIsSubTaskValue(e.target.value)}
            />
            <button onClick={handleAddSubtask}>Add SubTask</button>
          </>
        ) : null}
      </div>
    </Fragment>
  );
};

export default MainComponent;
