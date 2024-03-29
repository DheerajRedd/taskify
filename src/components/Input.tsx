import React from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Input = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="input">
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Your Task"
        className="input__box"
      />
      <button type="submit" className="input_submit" onSubmit={handleAdd}>
        Go
      </button>
    </form>
  );
};

export default Input;
