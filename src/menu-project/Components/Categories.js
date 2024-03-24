import React from "react";

const Categories = ({ category, click, isActive }) => {
  return (
    <button
      type="button"
      // highlight class  for highlight main category
      onClick={() => click(category)}
      className={`filter-btn ${isActive ? "highlight" : ""}`}
    >
      {category}
    </button>
  );
};

export default Categories;
