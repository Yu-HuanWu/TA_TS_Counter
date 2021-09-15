import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import counterReducer from "./frontend/reducer/counterReducer"
import App from "./app";
import { Provider } from "react-redux";


const store = createStore(
    counterReducer,
);

// function Swift() {
//     return (
//         <div>
//             <Provider store={store}>
//                 <App />
//             </Provider>
//         </div>
//     );
// }

const Swift = ({ store }) => (
    <Provider store={store}>
        <App />
    </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    ReactDOM.render(<Swift store={store}/>, main);
});

// ReactDOM.render(
//         <Provider store={store}>
//             <App />
//         </Provider>,
//     document.getElementById("main")
// );