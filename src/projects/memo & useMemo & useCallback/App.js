import React, { useState, memo, useMemo, useCallback } from "react";

const App = () => {
  const [val, setVal] = useState("");
  const [count, setCount] = useState(0);

  const addCount = useCallback(() => {
    console.log("add");
    setCount((prev) => prev + 1);
  }, [count]);

  const minCount = useCallback(() => {
    console.log("min");
    setCount((prev) => prev - 1);
  }, [count]);

  return (
    <div>
      <input type="text" onChange={(e) => setVal(e.target.value)} />
      <h1>{val}</h1>
      
      {useMemo(() => {
        console.log("comusememo");
        return (
          <>
            <h1>{count}</h1>
            <Button add={addCount} min={minCount} />
          </>
        );
      } , [count])}
    </div>
  );
};

const Button = memo(({ add, min }) => {
  console.log("btn");
  return (
    <>
      <button onClick={add}>+</button>
      <button onClick={min}>-</button>
    </>
  );
});

export default App;
