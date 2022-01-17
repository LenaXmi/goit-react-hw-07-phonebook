import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import axios from "axios";
import App from "./App";
import { store } from "./redux/store";
import "./index.css";
const contacts = () => {
  fetch('https://61e42cd7fbee6800175eb21d.mockapi.io/contacts').then(res=>res.json()).then(console.log)
}
contacts()
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
   
        <App />
   
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
