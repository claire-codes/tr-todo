import React from "react";
import "./App.css";
import styled from "styled-components";

const MainBody = styled.div`
  background-color: #fffae7;
`;

const TodoItem = styled.li`
  color: ${props => (props.complete ? "blue" : "green")};
`;

class App extends React.Component {
  state = {
    todos: [
      { task: "alpha", complete: false },
      { task: "beta", complete: false },
      { task: "gamma", complete: false }
    ]
  };

  deleteTodo = index => {
    let newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({ todos: newTodos });
  };

  completeTodo = index => {
    let newTodos = [...this.state.todos];
    let newTodo = this.state.todos[index];
    newTodo.complete = !newTodo.complete;
    newTodos[index] = newTodo;
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <MainBody>
        <h1>To-Do List</h1>
        <ul>
          {this.state.todos.map((item, index) => {
            return (
              <TodoItem key={index} complete={item.complete}>
                {item.task}&nbsp;
                <button type="button" onClick={() => this.deleteTodo(index)}>
                  Delete
                </button>
                &nbsp;
                <button type="button" onClick={() => this.completeTodo(index)}>
                  Complete
                </button>
              </TodoItem>
            );
          })}
        </ul>
      </MainBody>
    );
  }
}

export default App;
