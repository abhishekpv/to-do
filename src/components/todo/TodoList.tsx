import moment from "moment";
import { TodoType } from "../../db";
import TodoCard from "./TodoCard";
import CompleteCard from "./CompleteCard";

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
            <TodoCard handleCompleteTodo={handleCompleteTodo} todo={todo} />
          );
        })}
      </div>
      <div className="todo-group">
        <p>Completed</p>
        {finished.map((todo) => {
          return (
            <CompleteCard handleDeleteTodo={handleDeleteTodo} todo={todo} />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
