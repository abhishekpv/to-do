import { ChangeEvent, useState } from "react";

interface PropsType {
  handleAddTodo: (task: string) => Promise<void>;
}

const TodoForm = ({ handleAddTodo }: PropsType) => {
  const [task, setTask] = useState("");

  const handleOnClick = () => {
    handleAddTodo(task);
    setTask("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e?.target?.value ?? "");
  };
  
  return (
    <div className="todo-form">
      <input value={task} type="text" onChange={handleChange} />
      <button onClick={handleOnClick}>Add</button>
    </div>
  );
};

export default TodoForm;
