import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusOne, plusOne } from "./redux/modules/counter";

function App() {
  const number = useSelector((state) => state.counter.number);
  console.log(number)
  const dispatch = useDispatch();
  return (
    <div>
      <button
      onClick={() => {
        dispatch(minusOne());
      }}
      >-</button>
      {number}
      <button
        onClick={() => {
          dispatch(plusOne());
        }}
      >+</button>
    </div>
  );
}

export default App;
