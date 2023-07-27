import { useState } from "react";
import shortid from "shortid";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

// interface를 이용한 Todos 타입 정의
export interface Todo {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: shortid.generate(),
      title: "액션가면 보기",
      contents: "오후 4시 본방송 !",
      isDone: true,
    },
    {
      id: shortid.generate(),
      title: "이슬이누나랑 놀러가기",
      contents: "어디 갈까 ?",
      isDone: false,
    },
  ]);

  return (
    <>
      <header
        style={{
          // border: "1px solid black",
          color: "#ffffff",
          backgroundColor: "#000000",
          padding: "10px",
          margin: "10px",
        }}
      >
        <h1>짱구의 투두리스트</h1>
      </header>
      <Input todos={todos} setTodos={setTodos} />
      <main
        style={{
          // border: "1px solid black",
          backgroundColor: "#ff3721",
          padding: "10px",
          margin: "10px",
        }}
      >
        <TodoList todos={todos} setTodos={setTodos} isDone={false} />
        <TodoList todos={todos} setTodos={setTodos} isDone={true} />
      </main>
      <footer
        style={{
          // border: "1px solid black",
          height: "100px",
          backgroundColor: "#f2f53b",
          padding: "10px",
          margin: "10px",
        }}
      >
        # 짱구혜진 # 윤빈나 컨셉 조언 #호랑이 선생님 명강의
      </footer>
    </>
  );
};

export default App;
