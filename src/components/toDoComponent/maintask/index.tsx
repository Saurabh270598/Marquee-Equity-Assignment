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
          <ul className="subtask-list">
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
          </ul>
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
