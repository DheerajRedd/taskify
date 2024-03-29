import React, { useState } from "react";
import { Todo } from "./model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.todo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...t, todo: editedTodo } : t))
    );
    setIsEditing(false);
  };

  const handleDelete = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const handleComplete = () => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  return (
    <div className="todos__single">
      {isEditing ? (
        <input
          type="text"
          value={editedTodo}
          onChange={(e) => setEditedTodo(e.target.value)}
          onBlur={handleSaveEdit}
          autoFocus
        />
      ) : (
        <>
          <span className="todos__single--text">{todo.todo}</span>
          <div>
            <span className="icon" onClick={handleEdit}>
              <AiFillEdit />
            </span>
            <span className="icon" onClick={handleDelete}>
              <AiFillDelete />
            </span>
            <span className="icon" onClick={handleComplete}>
              <MdDone style={{ color: todo.isCompleted ? "green" : "gray" }} />
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleTodo;
