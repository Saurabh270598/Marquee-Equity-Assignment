import { Dispatch, SetStateAction } from "react";

export interface IAddtaskComponent {
  todoText: string;
  setTodotext: Dispatch<SetStateAction<string>>;
  handleAddTask: () => void;
}

export interface IMaintaskComponent {
  todoText: string;
  setTodotext: Dispatch<SetStateAction<string>>;
  handleAddTask: () => void;
  handleAddSubtask?: (key: string, value: string) => void;
  isSubInputOpen: boolean;
  value?: string;
  subtaskValue: {
    [key: string]: string | { value: string };
  };
}
