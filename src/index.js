import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.scss";

window.DOMNavigator = App;

ReactDOM.createRoot(document.getElementById('dom-navigation-container')).render(<App />);