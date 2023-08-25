import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, minusNumber } from "./redux/modules/counter";

function App() {
  const [number, setNumber] = useState(0);
  const onChangeHandler = (event) => {
    const payload = event.target.value
    setNumber(+payload)
    console.log("asd",payload)
  }

  const globalNumber = useSelector((state) => state.counter.number);
  console.log(number)
  const dispatch = useDispatch();

  const onClickAddNumberHandler = () => {
    dispatch(addNumber(number))
  };
  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(number))
  };
  return (
    <div>
      <div>
        <button
        onClick={onClickMinusNumberHandler}
        >-</button>
        {globalNumber}
        <button
          onClick={onClickAddNumberHandler}
        >+</button>
      </div>
      <div>
        <input
        type="number"
        onChange={onChangeHandler}
        >
        </input>
      </div>
    </div>
  );
}

export default App;
