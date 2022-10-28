import React from "react";
import "./MainOption.css";
const MainOption = (props) => {
  const { title, link, id } = props;
  console.log(link);

  return (
    <div className="main-option">
      <a className="btn" href={link} id={id}>
        {title}
      </a>
    </div>
  );
};

export default MainOption;
