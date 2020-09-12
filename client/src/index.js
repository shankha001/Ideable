import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js';

//===Redux===//
import store from './redux/store';
import { Provider } from 'react-redux';
figlet.parseFont('Standard', standard);

figlet.text(
  'CLIENT',
  {
    font: 'Standard',
  },
  function (err, data) {
    console.log(data);
  }
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
