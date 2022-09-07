import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { RoomProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RoomProvider>
    <BrowserRouter>
      <ScrollToTop>
        <Route path="/" component={App} />
      </ScrollToTop>
    </BrowserRouter>
  </RoomProvider>,

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
