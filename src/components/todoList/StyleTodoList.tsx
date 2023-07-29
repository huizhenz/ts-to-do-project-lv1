import { styled } from "styled-components";
import { BsTrash3 } from "react-icons/bs";

export const ListTitleImg = styled.img`
  width: 50px;
`;

export const TodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* border-bottom: 1px dashed #929292a9; */
  border: 1px dashed #b6b6b6a8;
  padding: 5px 10px;
  margin-bottom: 15px;
`;

export const TodoBox = styled.div`
  display: flex;
  margin: 5px 10px;
`;

export const TodoCheckBox = styled.input`
  width: 14px;
  cursor: pointer;
`;

export const TodoInfo = styled.div`
  margin-left: 15px;
`;

export const TodoDate = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const TodoTitle = styled.span<{ isDone: boolean }>`
  font-size: 16px;
  font-weight: 600;
  text-decoration: ${(props) => (props.isDone ? "line-through" : "")};
  margin-right: 20px;
`;

export const TodoContents = styled.span<{ isDone: boolean }>`
  font-size: 16px;
  text-decoration: ${(props) => (props.isDone ? "line-through" : "")};
`;

export const TodoDeleteBtn = styled(BsTrash3)`
  margin: 15px 20px;
  cursor: pointer;

  &:hover {
    color: #a70c0c;
  }
`;
