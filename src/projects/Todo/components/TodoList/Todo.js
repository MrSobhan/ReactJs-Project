import React, { Component } from "react";
import { MdDelete } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";

export default class Todo extends Component {
  clickEdit(id) {
    this.props.editTodo(id);
  }
  clickDel(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      // 'completed' class for completed todos
      <div className={`todo ${this.props.isComplate ? 'completed' : ''}`} style={{ display: "flex" }}>
        <li className="todo-item">{this.props.title}</li>

        <button className="check-btn">
          <GrCompliance onClick={(id) => this.clickEdit(this.props.id)} />
        </button>

        <button className="trash-btn">
          <MdDelete onClick={(id) => this.clickDel(this.props.id)} />
        </button>
      </div>
    );
  }
}
