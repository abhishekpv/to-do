import moment from "moment";
import { TodoType } from "../../db";

const CompleteCard = ({
  todo,
  handleDeleteTodo,
}: {
  todo: TodoType;
  handleDeleteTodo: (id: number) => Promise<void>;
}) => {
  return (
    <div key={todo.id} className="todo-card complete-card">
      <p>{todo.task}</p>
      <div className="todo-card-footer">
        <p>{moment(Number(todo.createdAt)).fromNow()}</p>
        <p>{moment(Number(todo.completedAt)).fromNow()}</p>
      </div>
      <button
        className="remove-btn"
        onClick={() => {
          todo.id && handleDeleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default CompleteCard;
