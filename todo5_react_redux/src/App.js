import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const number = useSelector((state) => state.counter.number);
  console.log(number)
  const dispatch = useDispatch();
  return (
    <div>
      <button
      onClick={() => {
        dispatch({type : "MINUS_ONE"});
      }}
      >-</button>
      {number}
      <button
        onClick={() => {
          dispatch({type : "PLUS_ONE"});
        }}
      >+</button>
    </div>
  );
}

export default App;
