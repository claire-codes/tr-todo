import React from "react";
import "./App.css";
import styled from "styled-components";

const MainBody = styled.div`
  background-color: #fffae7;
`;

class App extends React.Component {
  render() {
    return (
      <MainBody>
        <h1>To-Do List</h1>
      </MainBody>
    );
  }
}

export default App;
