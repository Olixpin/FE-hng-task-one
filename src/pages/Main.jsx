import React from "react";
import MainOption from "../components/MainOption";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Slack } from "../assets/slack.svg";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <MainOption
        title="Twitter Link"
        link="https://twitter.com/Olixpin"
        id="twitter"
      />
      <MainOption
        title="Zuri Team"
        link="https://training.zuri.team/"
        id="btn_zuri"
      />
      <MainOption
        title="Zuri Books"
        link="https://books.zuri.team/"
        id="books"
      />
      <MainOption
        title="Python Books"
        link="https://books.zuri.team/python-for-beginners?ref_id=%3COlix%3E"
        id="book_python"
      />
      <MainOption
        title="Background Check for Coders"
        link="https://background.zuri.team/"
        id="pitch"
      />
      <MainOption
        title="Design Books"
        link="https://books.zuri.team/design-rules"
        id="book_design"
      />

      <div className="social-media">
        <a href="https://github.com/Olixpin">
          <Github />
        </a>

        <a href="https://zuri.chat/">
          <Slack />
        </a>
      </div>
    </div>
  );
};

export default Main;
