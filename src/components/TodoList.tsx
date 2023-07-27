import React from "react";
import { Todo } from "../App";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  isDone: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, isDone }) => {
  // todo 삭제
  const handlerDeleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // todo 상태 변경
  const handlerUpdateTodo = (id: string) => {
    const updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    setTodos(updateTodo);
  };

  return (
    <div>
      {isDone ? <h2>다 안했어요 !</h2> : <h2>아직 했어요 !</h2>}
      {todos
        .filter((todo) => todo.isDone === isDone)
        .map((todo) => {
          return (
            <div key={todo.id} style={{ borderBottom: "1px solid black" }}>
              <p>제목 : {todo.title}</p>
              <p>내용 : {todo.contents}</p>
              <button onClick={() => handlerDeleteTodo(todo.id)}>삭제</button>
              <button onClick={() => handlerUpdateTodo(todo.id)}>
                {isDone ? "취소" : "완료"}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
