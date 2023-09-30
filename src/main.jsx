import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store.js';
import { BrowserRouter } from 'react-router-dom';
import Modal from 'react-modal';
// Modal.setAppElement(<App />);

ReactDOM.createRoot(document.getElementById('root')).render(
  //  Modal.setAppElement(document.getElementById('root'));
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {Modal.setAppElement(document.getElementById('root'))}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
