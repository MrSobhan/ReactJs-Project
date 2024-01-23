import React, { Component } from "react";
import Note from "./Note";
import ColorBox from "./ColorBox";
import { IoIosAddCircle } from "react-icons/io";
import { FaEraser } from "react-icons/fa";

export default class NoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        "#fff",
        "#FFD37F",
        "#FFFA81",
        "#D5FA80",
        "#78F87F",
        "#79FBD6",
        "#79FDFE",
        "#7AD6FD",
        "#7B84FC",
        "#D687FC",
        "#FF89FD",
      ],
      notes: [],
      noteTitle: "",
      inputColor: "#fff",
    };
  }

  noteTitleHandler(val) {
    this.setState({ noteTitle: val });
  }

  addNoteHandler() {
    if (this.state.noteTitle) {
      let obj = {
        id: this.state.notes.length + 1,
        title: this.state.noteTitle,
        bg: this.state.inputColor,
      };

      let arryNotes = this.state.notes;

      arryNotes.push(obj);

      this.setState({ notes: arryNotes });
      this.setState({ inputColor: '#fff' });

      this.clearInput()
    }
  }

  clearInput() {
    this.setState({ noteTitle: "" });
  }

  changeColor(color){
    this.setState({inputColor : color})
  }

  removeNote(id){
    let findInnote = this.state.notes.findIndex((e) => e.id == id);

    let noteList = this.state.notes;

    noteList.splice(findInnote, 1);

    this.setState({ notes: noteList });
  }

  render() {
    return (
      <>
        <div>
          <section id="home">
            <div className="container">
              <div className="header upper">SabzLearn Note App</div>

              <br />
              <br />
              <div className="flex row-gt-sm">
                <div className="flex flex-50-gt-sm">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                    <input
                      id="input-field"
                      className="form-control"
                      type="text"
                      style={{ backgroundColor: this.state.inputColor }}
                      placeholder="Something here..."
                      value={this.state.noteTitle}
                      onChange={(e) => this.noteTitleHandler(e.target.value)}
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                    <div id="color-select">
                      {this.state.colors.map((col) => (
                        <ColorBox key={col} color={col} reColor={(color)=>this.changeColor(color)}/>
                      ))}
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                    <button
                      id="btn-save"
                      type="button"
                      className="btn btn-outline-info"
                      onClick={() => this.addNoteHandler()}
                    >
                      <IoIosAddCircle />
                    </button>
                    <button
                      id="btn-delete"
                      type="button"
                      className="btn btn-outline-danger"
                    >
                      <FaEraser />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex row-gt-sm">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="container">
                    <div className="row g-3 w-100">
                      <div
                        id="listed"
                        className="col-md-6 col-lg-4 p-3 mb-4"
                      >
                        {this.state.notes.map((e) => (
                          <Note key={e.id} {...e} removeNote={id =>this.removeNote(id)}/>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
