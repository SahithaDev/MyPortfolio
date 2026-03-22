import Header from "./components/Header";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Projects from "./components/Projects";
import { Outlet } from "react-router-dom";
import React from "react";
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/project",
        element: <Projects />,
      },
      {
        path: "/exp",
        element: <Experience />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
