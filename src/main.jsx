import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "modern-normalize";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <HelmetProvider>
        <App />
        </HelmetProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
