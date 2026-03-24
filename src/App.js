import Header from "./components/Header";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Projects from "./components/Projects";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import Experience from "./components/Experience";
import React from "react";
const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <About />
      <Projects />
      <Experience />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
