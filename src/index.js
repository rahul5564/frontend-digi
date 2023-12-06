import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {BrowserRouter} from "react-router-dom" 
import { CartContext,Cartprovider } from './cart/Cartprovider';
export{CartContext};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Cartprovider>
    <App />
    </Cartprovider>
    </BrowserRouter>
  </React.StrictMode>
);


