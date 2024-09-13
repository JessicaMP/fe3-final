import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import Context from "./Context/DentistsContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Context>
      <React.StrictMode>
          <App/>
      </React.StrictMode>
    </Context>
  </BrowserRouter>
);
