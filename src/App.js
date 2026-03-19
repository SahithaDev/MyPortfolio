import Header from "./components/Header";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import react from "react";
const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
