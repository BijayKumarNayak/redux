import React from "react";
import "./App.css"
import { useSelector, useDispatch } from "react-redux";
import { incNumber } from "./action/Action";
import { decNumber } from "./action/Action";
import Button from '@mui/material/Button';
function App() {
  const mystate = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>INCREMENT/ DECREMENT COUNTER</h1>
      <div className="main">
        <Button variant="contained" onClick={() => dispatch(incNumber())}>+</Button>
        <input type="text" value={mystate} />
        <Button variant="contained" onClick={() => dispatch(decNumber())}>-</Button>
      </div>
    </div>
  );
}
export default App;
