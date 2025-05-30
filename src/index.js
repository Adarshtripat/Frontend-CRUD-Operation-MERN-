import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'; 
import Store from './Store/Store';
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <Provider store = {Store}>
  <Router>
    <App/>
    </Router>
    </Provider>
    </>
);
reportWebVitals();
