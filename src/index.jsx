import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App.jsx';
/* eslint-disable */

ReactDOM.render(
  <Router>
    <Route component={App} />
  </Router>,

  document.getElementById('app'),
);
