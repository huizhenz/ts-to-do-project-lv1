import { styled } from "styled-components";

export const ModalBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBtn = styled.button<{ width: string; borderradius: string }>`
  width: ${(props) => (props.width ? "37px" : "120px;")};
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  background-color: #eed61d;
  border: none;
  border-radius: ${(props) => (props.borderradius ? "50%" : "20px")};
  padding: 7px;
  margin-top: 50px;
  cursor: pointer;

  &:hover {
    background-color: #d8ba10;
  }
`;
