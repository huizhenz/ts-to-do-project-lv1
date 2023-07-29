import React from "react";
import { Todo } from "../../App";
import done from "../../assets/done.png";
import working from "../../assets/working.png";
import * as S from "./StyleTodoList";

// interface를 이용한 TodoListProps 타입 정의
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
      {isDone ? (
        <S.ListTitleImg src={done} />
      ) : (
        <S.ListTitleImg src={working} />
      )}
      {todos
        .filter((todo) => todo.isDone === isDone)
        .map((todo) => {
          return (
            <S.TodoWrapper key={todo.id}>
              <S.TodoBox>
                <S.TodoCheckBox
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={() => handlerUpdateTodo(todo.id)}
                />
                <S.TodoInfo>
                  <S.TodoDate>{todo.createdAt}</S.TodoDate>
                  <S.TodoTitle isDone={todo.isDone}>{todo.title}</S.TodoTitle>
                  <S.TodoContents isDone={todo.isDone}>
                    {todo.contents}
                  </S.TodoContents>
                </S.TodoInfo>
              </S.TodoBox>
              <S.TodoDeleteBtn
                size="22"
                onClick={() => handlerDeleteTodo(todo.id)}
              />
            </S.TodoWrapper>
          );
        })}
    </div>
  );
};

export default TodoList;
