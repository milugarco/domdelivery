import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <BrowserRouter>
      <ReactNotification />
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();