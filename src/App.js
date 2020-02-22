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

  deleteTodo = index => {
    let newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <MainBody>
        <h1>To-Do List</h1>
        <ul>
          {this.state.todos.map((item, index) => {
            return (
              <li key={index}>
                {item}&nbsp;
                <button type="button" onClick={() => this.deleteTodo(index)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </MainBody>
    );
  }
}

export default App;
