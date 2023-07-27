import { useState } from "react";
import shortid from "shortid";

// interface를 이용한 Todos 타입 정의
interface Todos {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}

const App = () => {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([
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
      <main
        style={{
          // border: "1px solid black",
          backgroundColor: "#ff3721",
          padding: "10px",
          margin: "10px",
        }}
      >
        <div>
          <h2>아직 안했어요 !</h2>
          {todos
            .filter((todo) => todo.isDone === false)
            .map((todo) => {
              return (
                <div key={todo.id} style={{ borderBottom: "1px solid black" }}>
                  <p>제목 : {todo.title}</p>
                  <p>내용 : {todo.contents}</p>
                  <button onClick={() => handlerDeleteTodo(todo.id)}>
                    삭제
                  </button>
                  <button onClick={() => handlerUpdateTodo(todo.id)}>
                    완료
                  </button>
                </div>
              );
            })}
        </div>
        <div>
          <h2>다 했어요 !</h2>
          {todos
            .filter((todo) => todo.isDone === true)
            .map((todo) => {
              return (
                <div key={todo.id} style={{ borderBottom: "1px solid black" }}>
                  <p>제목 : {todo.title}</p>
                  <p>내용 : {todo.contents}</p>
                  <button onClick={() => handlerDeleteTodo(todo.id)}>
                    삭제
                  </button>
                  <button onClick={() => handlerUpdateTodo(todo.id)}>
                    취소
                  </button>
                </div>
              );
            })}
        </div>
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
        # 짱구혜진 # 윤빈나 컨셉 조언
      </footer>
    </>
  );
};

export default App;
