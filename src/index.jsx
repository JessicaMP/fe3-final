import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import DentistsContext from "./Context/DentistsContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <DentistsContext>
      <React.StrictMode>
          <App/>
      </React.StrictMode>
    </DentistsContext>
  </BrowserRouter>
);
