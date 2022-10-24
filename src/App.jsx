import React from "react";
import Main from "./pages/Main";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Profile />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
