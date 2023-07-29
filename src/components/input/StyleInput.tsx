import styled from "styled-components";

export const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #b2b2b2b6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContents = styled.form`
  position: relative;
  width: 300px;
  height: 450px;
  background-color: #373737e1;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ModalDate = styled.div`
  color: #ffffff;
  margin-bottom: 20px;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 2%;
  right: 3%;
  font-size: 20px;
  color: #ffffff;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;

  &:hover {
    color: #bfbfbf;
  }
`;

export const ModalInput = styled.input`
  width: 200px;
  height: 22px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin-top: 20px;
`;
