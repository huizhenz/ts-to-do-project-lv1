import React from "react";
import btn from "../../assets/btn.png";
import * as S from "./StyleHeader";

const Header = () => {
  return (
    <S.HeaderBox>
      <S.HeaderImg src={btn} alt="이미지를 찾을 수 없습니다." />
      To Do List
    </S.HeaderBox>
  );
};

export default Header;
