import React from "react";
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

const Button = styled.button`
  margin-left: 15px;
  font-size: 30px;
  background-color: unset;
  border-radius: 5px;
  font-family: "Learning Curve Pro";
  padding: 3px 15px;
  box-shadow: 1px 1px 2px #ccc;
  border-color: #ccc;
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
      <AppBody>
        <Heading>
          <AppTitle>Todo List</AppTitle>
        </Heading>
        <InputContainer>
          <label>Add a new todo item:</label>&nbsp;
          <TodoInput
            type="text"
            value={this.state.todoToAdd}
            onChange={e => {
              this.setState({ todoToAdd: e.target.value });
            }}
            onKeyDown={this.addToDoOnEnter}
            placeholder="Type your next todo here"
            autoFocus
          />
          <Button
            type="button"
            onClick={() => this.addTodo(this.state.todoToAdd)}
          >
            Add
          </Button>
        </InputContainer>
        <TodoList>
          {this.state.todos.map((item, index) => {
            return (
              <li key={index}>
                <TodoItemText complete={item.complete}>
                  {item.task}
                </TodoItemText>
                &nbsp;
                <Button type="button" onClick={() => this.deleteTodo(index)}>
                  Delete
                </Button>
                &nbsp;
                <Button type="button" onClick={() => this.completeTodo(index)}>
                  Complete
                </Button>
              </li>
            );
          })}
        </TodoList>
      </AppBody>
    );
  }
}

export default App;
