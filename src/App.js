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
    todos: [
      { task: "get into the garden", complete: false },
      { task: "steal the groundskeeper's keys", complete: false }
    ],
    todoToAdd: ""
  };

  deleteTodo = index => {
    let newTodoList = [...this.state.todos];
    newTodoList.splice(index, 1);
    this.setState({ todos: newTodoList });
  };

  completeTodo = index => {
    let newTodoList = [...this.state.todos];
    let newTodo = this.state.todos[index];
    newTodo.complete = !newTodo.complete;
    newTodoList[index] = newTodo;
    this.setState({ todos: newTodoList });
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
    // keycode for enter or return key is 13
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
          <label for="todoInput">Add a new todo item:</label>&nbsp;
          <TodoInput
            type="text"
            id="todoInput"
            value={this.state.todoToAdd}
            onChange={e => {
              this.setState({ todoToAdd: e.target.value });
            }}
            onKeyDown={this.addToDoOnEnter}
            placeholder="Type your todo here"
            autoFocus
          />
          <Button
            type="button"
            onClick={() => this.addTodo(this.state.todoToAdd)}
          >
            Add item
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
                  Delete item
                </Button>
                &nbsp;
                <Button type="button" onClick={() => this.completeTodo(index)}>
                  Complete item
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
