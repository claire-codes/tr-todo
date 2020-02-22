import React from "react";
import "./App.css";
import styled from "styled-components";

const MainBody = styled.div`
  background-color: #fffae7;
`;

class App extends React.Component {
  state = {
    todos: ["alpha", "beta", "gamma"]
  };

  render() {
    return (
      <MainBody>
        <h1>To-Do List</h1>
        <ul>
          {this.state.todos.map(item => {
            return <li>{item}</li>;
          })}
        </ul>
      </MainBody>
    );
  }
}

export default App;
