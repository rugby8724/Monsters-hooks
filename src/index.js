// react is the underlying engine for how react runs as an application builder
import React from 'react';
// reactDom is specifying this app is for web applications
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

  // where to render to file. here we are rendering it in the html file with an id of root
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // In short, StrictMode helps to identify unsafe, legacy, or deprecated APIs/lifecycles. It's used for highlighting possible problems. Since it's a developer tool, it runs only in development mode. It renders every component inside the web app twice in order to identify and detect any problems in the app and show warning messages.
  <React.StrictMode>
    <App />
  </React.StrictMode>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
