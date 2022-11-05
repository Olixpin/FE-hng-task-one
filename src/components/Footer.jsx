import React from "react";
import "./Footer.css";
import { ReactComponent as Logo } from "../assets/zuri-logo.svg";
import { ReactComponent as I4G } from "../assets/I4G.svg";

const Footer = ({ style }) => {
  console.log(style);
  return (
    <div className={style ? "footer" : "footer style"}>
      <Logo />
      <p>HNG Internship 9 Frontend Task</p>
      <I4G />
    </div>
  );
};

export default Footer;
