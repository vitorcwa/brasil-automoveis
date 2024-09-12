import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
// import { CssBaseline } from '@material-ui/core';
import { createRoot } from 'react-dom/client';

// ReactDOM.render(
//   <React.StrictMode>
//     <CssBaseline />
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// Before
// import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);