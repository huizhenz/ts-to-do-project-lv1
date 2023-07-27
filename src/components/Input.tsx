import React, { useState } from "react";
import shortid from "shortid";
import { Todo } from "../App";

interface InputProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Input: React.FC<InputProps> = ({ todos, setTodos }) => {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onChangeContents = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContents(e.target.value);

  // todo 추가
  const handlerAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    const newTodo = {
      id: shortid.generate(),
      title,
      contents,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setContents("");
  };

  return (
    <form
      onSubmit={handlerAddTodo}
      style={{
        // border: "1px solid black",
        height: "50px",
        backgroundColor: "#fcd9ae",
        padding: "10px",
        margin: "10px",
      }}
    >
      <input type="text" value={title} onChange={onChangeTitle} />
      <input type="text" value={contents} onChange={onChangeContents} />
      <button>추가</button>
    </form>
  );
};

export default Input;
