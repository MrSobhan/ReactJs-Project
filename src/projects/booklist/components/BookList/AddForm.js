import React, { Component } from "react";
import Book from "./Book";

export default class AddForm extends Component {
  constructor() {
    super();

    this.state = {
      books: [],

      title: "",
      author: "",
      year: "",
    };
  }

  submitHandel(e) {
    e.preventDefault();

    if (this.state.title && this.state.author && this.state.year) {
      let obj = {
        id: this.state.books.length + 1,
        title: this.state.title,
        author: this.state.author,
        year: this.state.year,
      };

      let bookNew = this.state.books;

      bookNew.push(obj);

      this.setState({ books: bookNew });

      console.log(bookNew);

      this.clearInput();
    }
  }

  titleHandel(val) {
    this.setState({ title: val });
  }
  authorHandel(val) {
    this.setState({ author: val });
  }
  yearHandel(val) {
    this.setState({ year: val });
  }

  clearInput() {
    this.setState({ title: "" });
    this.setState({ author: "" });
    this.setState({ year: "" });
  }

  render() {
    return (
      <>
        <form
          id="book-form"
          autocomplete="off"
          onSubmit={(e) => this.submitHandel(e)}
        >
          <div className="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              onChange={(e) => this.titleHandel(e.target.value)}
              value={this.state.title}
            />
          </div>

          <div className="form-group">
            <label for="author">Author</label>
            <input
              type="text"
              id="author"
              className="form-control"
              onChange={(e) => this.authorHandel(e.target.value)}
              value={this.state.author}
            />
          </div>

          <div className="form-group">
            <label for="year">Year</label>
            <input
              type="text"
              id="year"
              className="form-control"
              onChange={(e) => this.yearHandel(e.target.value)}
              value={this.state.year}
            />
          </div>
          <input
            type="submit"
            value="Add Book"
            className="btn btn-warning btn-block add-btn"
          />
        </form>
        <table class="table table-striped mt-5 text-center">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody id="book-list">
            {this.state.books.length > 0 &&
              this.state.books.map((book) => <Book key={book.id} {...book} />)}
          </tbody>
        </table>
      </>
    );
  }
}
