import styled from "styled-components";

const AppBody = styled.main`
  height: 100vh;
  margin-left: 50px;
  font-size: 40px;
  border-left: 2px solid #e7847e;
  padding-left: 20px;
`;

const TodoItemText = styled.span`
  text-decoration: ${props => (props.complete ? "line-through" : "none")};
  color: ${props => (props.complete ? "#aaa" : "inherit")};
`;

const Heading = styled.header`
  border-bottom: 2px solid #7aafff;
  margin-left: -70px;
  padding-left: 70px;
  padding-top: 40px;
`;

const AppTitle = styled.h1`
  margin: 0;
  font-size: 50px;
`;

const TodoInput = styled.input`
  font-size: 40px;
  font-family: "Learning Curve Pro";
  border: none;
  border-bottom: 1px solid black;
  background-color: unset;
  width: 350px;
  padding-left: 10px;
`;

const TodoList = styled.ul`
  margin: 0;
`;

const InputContainer = styled.div`
  margin: 20px 0;
`;

export {
  AppBody,
  TodoItemText,
  Heading,
  AppTitle,
  TodoInput,
  TodoList,
  InputContainer
};
