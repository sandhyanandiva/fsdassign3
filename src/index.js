import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Quiz from './Quiz.js';

const App=() =>{
  return(
  <center>
  <Quiz />
  </center>
  );
};

ReactDOM.render(
  <>
  <App />
  </>,
  document.getElementById('root')
);