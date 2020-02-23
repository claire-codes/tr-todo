import React from "react";

import {
  AppBody,
  TodoItemText,
  Heading,
  AppTitle,
  TodoInput,
  TodoList,
  InputContainer,
  Button
} from "./component-styles.js";

const initialTodos = [
  { task: "get into the garden", complete: false },
  { task: "steal the groundskeeper's keys", complete: false }
];

class App extends React.Component {
  state = {
    todos: [],
    todoToAdd: ""
  };

  componentDidMount() {
    let todoList = JSON.parse(localStorage.getItem("todos")) || initialTodos;
    this.setState({ todos: todoList });
  }

  deleteTodo = index => {
    let newTodoList = [...this.state.todos];
    newTodoList.splice(index, 1);
    this.setState({ todos: newTodoList });
    localStorage.setItem("todos", JSON.stringify(newTodoList));
  };

  completeTodo = index => {
    let newTodoList = [...this.state.todos];
    let newTodo = this.state.todos[index];
    newTodo.complete = !newTodo.complete;
    newTodoList[index] = newTodo;
    this.setState({ todos: newTodoList });
    localStorage.setItem("todos", JSON.stringify(newTodoList));
  };

  addTodo = todo => {
    if (todo === "") {
      return;
    } else {
      this.setState({
        todos: [...this.state.todos, { task: todo, complete: false }]
      });
      localStorage.setItem(
        "todos",
        JSON.stringify([...this.state.todos, { task: todo, complete: false }])
      );
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
          <label htmlFor="todoInput">Add a new todo item:</label>&nbsp;
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
