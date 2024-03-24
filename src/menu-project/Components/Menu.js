import React from "react";
import menu from "../data";

const Menu = ({ title }) => {

  const currentMenu = title != "All" ? menu.filter((e) => e.category == title) : menu
  
  return (
    <div className="section-center">
      {currentMenu.map((item) => (
        <article className="menu-item" key={item.id}>
          <img src={item.img} className="photo" />
          <div className="item-info">
            <header>
              <h4>{item.title}</h4>
              <h4 className="price">{item.price}</h4>
            </header>
            <p className="item-text">{item.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Menu;
