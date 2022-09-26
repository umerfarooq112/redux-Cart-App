import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { add, decrement, increment } from "./store/Cart";
// import "./App.css";
// import Auth from "./components/Auth";
// import Layout from "./components/Layout";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // console.log(value);
  const Inc = () => {
    dispatch(increment());
  };
  const Dec = () => {
    dispatch(decrement());
  };

  const Add = () => {
    dispatch(add(10));
  };

  return (
    <div className="App">
      {/* <Auth /> */}
      {/* <Layout /> */}
      <p>value {counter}</p>
      <button onClick={() => Inc()}>Inc</button>
      <button onClick={Dec}>dec</button>
      <button onClick={() => Add(10)}>dec</button>
    </div>
  );
}

export default App;
