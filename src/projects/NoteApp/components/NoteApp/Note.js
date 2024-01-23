import React, { Component } from "react";

export default class Note extends Component {
  clickHandler(id) {
    this.props.removeNote(id);
  }
  render() {
    return (
      <div
        className="card shadow-sm rounded"
        style={{ backgroundColor: this.props.bg }}
        onClick={(id) => this.clickHandler(this.props.id)}
      >
        <p className="card-text p-3">{this.props.title}</p>
      </div>
    );
  }
}
