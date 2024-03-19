import React, { useRef, useState , useEffect } from "react";

const App = () => {
  const useWarText = useRef();

  const [val, setVal] = useState("");
  const [war, setWar] = useState("");


  useEffect(()=>{
    if(val.length < 8){
        setWar('NotValue')
        useWarText.current.style = "color:red;"
    }else{
        setWar('Value')
        useWarText.current.style = "color:green;"
    }
  } , [val])

  return (
    <>
      <input
        type="password"
        onChange={(e) => setVal(e.target.value)}
      />
      <h1 ref={useWarText}>{war}</h1>
    </>
  );
};

export default App;
