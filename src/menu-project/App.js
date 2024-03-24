import React, { useEffect, useMemo, useState } from "react";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";
import menu from "./data";
import "./App.css";

function App() {
  const [category, setCategory] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("All");

  useEffect(() => {
    let arryMenu = ["All"];
    menu.forEach((menu) => arryMenu.push(menu.category));
    let arrySetMenu = new Set(arryMenu);
    setCategory(Array.from(arrySetMenu));
  }, []);


  const changeCatHandler = (e) => {
    setCategoryTitle(e);
  };

  // ! Log

  // useEffect(() => {
  //   console.log(currentMenu);
  // }, [currentMenu]);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {category.map((cat) => (
            <Categories
              key={cat}
              category={cat}
              click={changeCatHandler}
              isActive={categoryTitle == cat ? true : false}
            />
          ))}
        </div>
        {useMemo(() => <Menu title={categoryTitle}/>, [categoryTitle])}
      </section>
    </main>
  );
}

export default App;
