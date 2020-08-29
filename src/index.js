import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './Store/store';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
   <StateProvider> <BrowserRouter> <App /> </BrowserRouter></StateProvider>,
    document.getElementById('root')
  );
