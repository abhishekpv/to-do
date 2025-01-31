import moment from "moment";
import { TodoType } from "../../db";

interface TodoListProps {
  handleCompleteTodo: (todo: TodoType) => Promise<void>;
  handleDeleteTodo: (id: number) => Promise<void>;
  todos: TodoType[];
}

const TodoList = ({
  handleCompleteTodo,
  handleDeleteTodo,
  todos,
}: TodoListProps) => {
  const { finished, inProgress } = todos.reduce<{
    inProgress: TodoType[];
    finished: TodoType[];
  }>(
    (res, todo) => {
      todo.completed ? res.finished.push(todo) : res.inProgress.push(todo);
      return res;
    },
    { inProgress: [], finished: [] }
  );

  return (
    <div className="todo-list">
      <div className="todo-group">
        {inProgress.map((todo) => {
          return (
            <div key={todo.id} className="todo-card">
              <p>{todo.task}</p>
              <div className="todo-card-footer">
                <p>{moment(Number(todo.createdAt)).fromNow()}</p>
                <p></p>
              </div>
              <button
                className="complete-btn"
                onClick={() => {
                  handleCompleteTodo(todo);
                }}
              >
                Mark as done
              </button>
            </div>
          );
        })}
      </div>
      <div className="todo-group">
        <p>Completed</p>
        {finished.map((todo) => {
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
        })}
      </div>
    </div>
  );
};

export default TodoList;
