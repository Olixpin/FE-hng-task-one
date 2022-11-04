import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* error page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
