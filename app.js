import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    reset,
} from "frontend/action/index.js"; //testing for git

function App() {
    const counter = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>
                How many times <br /> did Diego make a Taylor Swift reference?
            </h1>
            <h3>Counter</h3>
            <div className="counter">{counter}</div>
            <button onClick={() => dispatch(decrement())}>Decrease</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(increment())}>Increase</button>
        </div>
    );
}

export default App;