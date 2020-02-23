import React from "react";
import styled from "styled-components";

const MainBody = styled.div`
  background-color: #fffae7;
`;

const TodoItem = styled.li`
  color: ${props => (props.complete ? "blue" : "green")};
`;

class App extends React.Component {
  state = {
    todos: [{ task: "get into garden", complete: false }],
    todoToAdd: ""
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

  addTodo = todo => {
    if (todo === "") {
      return;
    } else {
      this.setState({
        todos: [...this.state.todos, { task: todo, complete: false }]
      });
      this.setState({ todoToAdd: "" });
    }
  };

  addToDoOnEnter = event => {
    if (event.keyCode === 13) {
      this.addTodo(this.state.todoToAdd);
    }
  };

  render() {
    return (
      <MainBody>
        <h1>Todo List</h1>
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
        <div>
          <label>Add a new todo item:</label>&nbsp;
          <input
            type="text"
            value={this.state.todoToAdd}
            onChange={e => {
              this.setState({ todoToAdd: e.target.value });
            }}
            onKeyDown={this.addToDoOnEnter}
            placeholder="Type your next todo here"
          />
          <button
            type="button"
            onClick={() => this.addTodo(this.state.todoToAdd)}
          >
            Add
          </button>
        </div>
      </MainBody>
    );
  }
}

export default App;
