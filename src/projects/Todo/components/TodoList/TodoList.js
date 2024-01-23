import React, { Component } from "react";
import Header from "./Header";
import Todo from "./Todo";
import { FaPlus, FaSadCry } from "react-icons/fa";
import { logRoles } from "@testing-library/react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoTitle: "",
      status: "all",
    };

    // this.addTodo = this.addTodo.bind(this)
    // this.removeTodo = this.removeTodo.bind(this)
    // this.editTodo = this.editTodo.bind(this)
    // this.todoTitleHandler = this.todoTitleHandler.bind(this)
    // this.statusHandler = this.statusHandler.bind(this)
  }

  addTodo(e) {
    e.preventDefault();
    console.log(this.state.todoTitle);

    if (this.state.todoTitle) {
      let obj = {
        id: this.state.todos.length + 1,
        title: this.state.todoTitle,
        isComplate: false,
      };

      let arryToto = this.state.todos;

      arryToto.push(obj);

      this.setState({ todos: arryToto });

      this.clearInput();
    }
  }

  todoTitleHandler(val) {
    this.setState({ todoTitle: val });
  }

  removeTodo(id) {
    let findIntodo = this.state.todos.findIndex((e) => e.id == id);

    let todoList = this.state.todos;

    todoList.splice(findIntodo, 1);

    this.setState({ todos: todoList });
  }

  editTodo(id) {
    let findIntodo = this.state.todos.findIndex((e) => e.id == id);

    let todoList = this.state.todos;

    this.setState((prev) => {
      // console.log(!prev.todos[findIntodo].isComplate);

      prev.todos[findIntodo].isComplate = !prev.todos[findIntodo].isComplate;

      return { todos: todoList };
    });
  }

  clearInput() {
    this.setState({ todoTitle: "" });
  }

  statusHandler(stateVal) {
    this.setState({ status: stateVal });
  }

  render() {
    return (
      <>
        <Header />
        <form onSubmit={(e) => this.addTodo(e)}>
          <input
            type="text"
            className="todo-input"
            maxLength="40"
            onChange={(e) => this.todoTitleHandler(e.target.value)}
            value={this.state.todoTitle}
          />
          <button className="todo-button" type="submit">
            <FaPlus />
          </button>
          <div className="select">
            <select
              name="todos"
              className="filter-todo"
              onChange={(e) => this.statusHandler(e.target.value)}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>

        <div className="todo-container">
          <ul className="todo-list">
            {this.state.todos.length > 0 &&
              this.state.status == "all" &&
              this.state.todos.map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  removeTodo={(id) => this.removeTodo(id)}
                  editTodo={(id) => this.editTodo(id)}
                />
              ))}

            {this.state.todos.length > 0 &&
              this.state.status == "completed" &&
              this.state.todos
                .filter((todo) => todo.isComplate)
                .map((todo) => (
                  <Todo
                    key={todo.id}
                    {...todo}
                    removeTodo={(id) => this.removeTodo(id)}
                    editTodo={(id) => this.editTodo(id)}
                  />
                ))}

            {this.state.todos.length > 0 &&
              this.state.status == "uncompleted" &&
              this.state.todos
                .filter((todo) => !todo.isComplate )
                .map((todo) => (
                  <Todo
                    key={todo.id}
                    {...todo}
                    removeTodo={(id) => this.removeTodo(id)}
                    editTodo={(id) => this.editTodo(id)}
                  />
                ))}
          </ul>
        </div>
      </>
    );
  }
}
