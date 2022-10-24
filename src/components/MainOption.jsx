import React from "react";
import "./MainOption.css";
const MainOption = (props) => {
  const { title, link, id } = props;
  console.log(link);

  return (
    <div className="main-option">
      <button>
        <a href={link}>{title}</a>
      </button>
    </div>
  );
};

export default MainOption;
