import React from "react";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import Main from "./Main";

export default function Home() {
  return (
    <div>
      <Profile />
      <Main />
      <Footer />
    </div>
  );
}
