import React from "react";
import "./MainOption.css";
const MainOption = (props) => {
  const { title, link, id, to } = props;
  console.log(link);

  return (
    <a className="btn" href={link} id={id}>
      {title}
    </a>
  );
};

export default MainOption;
