import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    reset,
} from "./frontend/action/index";

function App() {
    const counter = useSelector((state) => state);
    const dispatch = useDispatch();
    let alert;
    if (counter > 5) {
        // alert= alert("holy T-Swizz! He must be a true Swifties!");
    }

    return (
        <div className="App">
            <h1>
                How many times <br/> 
                did Diego make a <br/>
                <span className="TS">Taylor Swift</span> <br/> 
                reference today?
            </h1>
            <h3>Counter:</h3>
            {counter >= 13 ? "holy T-Swizz! He must be a true Swifties!" : null}
            <div className="counter">{counter}</div>
            <button onClick={() => dispatch(decrement())}>Badbunny <br/> reference (-1)</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(increment())}>T-swizzle! <br/> (+1)</button>
        </div>
    );
}

export default App;