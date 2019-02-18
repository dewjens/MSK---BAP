import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App.jsx';
/* eslint-disable */

ReactDOM.render(
  <Router basename="/jens.de.witte/20182019/BAP/">
    <Route component={App} />
  </Router>,

  document.getElementById('app'),
);
