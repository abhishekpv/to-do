import { useEffect, useState } from "react";
import { TodoType, addTodo, deleteTodo, getTodos, updateTodo } from "../../db";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./todo.css";

export const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const fetchTodos = async () => {
    const storedTodos = await getTodos();
    setTodos(storedTodos);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = async (task: string) => {
    const newTodo: TodoType = {
      task,
      completed: false,
      createdAt: `${Date.now()}`,
      completedAt: null,
    };
    await addTodo(newTodo);
    fetchTodos();
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    fetchTodos();
  };

  const handleCompleteTodo = async (todo: TodoType) => {
    await updateTodo({
      ...todo,
      completed: true,
      completedAt: `${Date.now()}`,
    });
    fetchTodos();
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <TodoForm handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
    </div>
  );
};
