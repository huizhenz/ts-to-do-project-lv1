import React, { useState } from "react";
import shortid from "shortid";
import { Todo } from "../../App";
import * as S from "./StyleInput";
import { ModalBtnBox, ModalBtn } from "../Button";
import btn from "../../assets/btn.png";

// interface를 이용한 InputProps 타입 정의
interface InputProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Input: React.FC<InputProps> = ({ todos, setTodos }) => {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onChangeContents = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContents(e.target.value);

  //  날짜 포맷팅
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const dateFormat = `${year}.${month}.${day}`;

  // todo 추가
  const handlerAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !contents) {
      return alert("내용이 비어있습니다.");
    }

    const newTodo = {
      id: shortid.generate(),
      title,
      contents,
      createdAt: dateFormat,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
    setIsOpen(false);
    setTitle("");
    setContents("");
  };

  const handlerOpenModal = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <ModalBtnBox>
        <ModalBtn width="" borderradius="" onClick={handlerOpenModal}>
          입력
        </ModalBtn>
      </ModalBtnBox>
      {isOpen && (
        <S.ModalBox>
          <S.ModalContents onSubmit={handlerAddTodo}>
            <S.ModalDate>Today is {dateFormat}</S.ModalDate>
            <S.HeaderImg src={btn} alt="이미지를 찾을 수 없습니다." />
            <S.ModalCloseBtn onClick={handlerOpenModal}>X</S.ModalCloseBtn>
            <S.ModalInput
              type="text"
              value={title}
              onChange={onChangeTitle}
              placeholder="제목을 입력해 주세요"
            />
            <S.ModalInput
              type="text"
              value={contents}
              onChange={onChangeContents}
              placeholder="내용을 입력해 주세요"
            />
            <ModalBtn width="small" borderradius="round">
              +
            </ModalBtn>
          </S.ModalContents>
        </S.ModalBox>
      )}
    </div>
  );
};

export default Input;
