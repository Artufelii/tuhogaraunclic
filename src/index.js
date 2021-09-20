import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';

const store = createStore(combineReducers({
  form: formReducer
}))

ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

