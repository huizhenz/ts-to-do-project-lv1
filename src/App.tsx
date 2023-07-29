import { useState } from "react";
import shortid from "shortid";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/header/Header";
import TodoList from "./components/todoList/TodoList";
import Input from "./components/input/Input";
import * as S from "./StyleApp";

// interface를 이용한 Todos 타입 정의
export interface Todo {
  id: string;
  title: string;
  contents: string;
  createdAt: string;
  isDone: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: shortid.generate(),
      title: "가로수길 애플 가기",
      contents: "맥북 픽업해오기",
      createdAt: "2023.07.27",
      isDone: true,
    },
    {
      id: shortid.generate(),
      title: "에어팟 케이스 사기",
      contents: "마음에 드는게 없어",
      createdAt: "2023.07.31",
      isDone: false,
    },
  ]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <S.ListContainer>
        <S.ListWrapper>
          <TodoList todos={todos} setTodos={setTodos} isDone={false} />
          <S.ListLine />
          <TodoList todos={todos} setTodos={setTodos} isDone={true} />
        </S.ListWrapper>
      </S.ListContainer>
      <Input todos={todos} setTodos={setTodos} />
    </>
  );
};

export default App;
