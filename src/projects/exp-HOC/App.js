import React from "react";
import questions from "./data";
import Question from './Components/Question'
import "./App.css";

function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((qus) => (
            <Question key={qus.id} title={qus.title} info={qus.info}/>
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
