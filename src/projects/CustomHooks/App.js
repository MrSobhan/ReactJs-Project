import React, { useState, useEffect } from "react";
import useLocalStorege from "./hooks/Localstorege";
import useCounter from "./hooks/useCounter";
import useInput from "./hooks/useInput";
import "./App.css";

const App = () => {
  // ! useLocalStorege
  // const [val , setVal] = useLocalStorege()
  // return (
  //     <input type="text" onChange={(e) => setVal(e.target.value)}  value={val}/>
  // );
  // ! useCounter

  //   const [counter, maxcount, mincount] = useCounter();

  //   return (
  //     <div>
  //       <button onClick={maxcount}>+</button>
  //       <h1>{counter}</h1>
  //       <button onClick={mincount}>-</button>
  //     </div>
  //   );

  // ! useInput

  const [val, pass, setVal, setPass , clearValue] = useInput();

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Hi ${val} ✌️❤️`);
    clearValue();
  };

  
  return (
    <form action="">
      <input
        type="text"
        name=""
        id=""
        placeholder="Name"
        onChange={(e) => setVal(e.target.value)}
        value={val}
      />
      <input
        type="password"
        name=""
        id=""
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
        value={pass}
      />
      <button type="submit" onClick={onSubmit}>
        Send
      </button>
    </form>
  );
};

export default App;
