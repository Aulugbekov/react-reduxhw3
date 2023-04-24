// import React, { useState } from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
// import { store } from "./index";
import { compareNumber } from "./store/Actions";

// import { setUserNumber, checkNumber } from "./store/Actions";

const App = () => {
  const dispatch = useDispatch();
  const comparisonResult = useSelector((state) => state.comparisonResult);

  const handleNumberInput = (e) => {
    const enteredNumber = parseInt(e.target.value);

    dispatch(compareNumber(enteredNumber));
  };

  return (
    <div className="game">
      <input type="number" onChange={handleNumberInput} />
      <p>{comparisonResult}</p>
    </div>
  );
};
export default App;
