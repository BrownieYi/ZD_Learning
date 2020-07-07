import React from 'react';
import ReactDOM from 'react-dom';
import { Ion, BingMapsApi } from 'cesium';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* global document window */
window.CESIUM_BASE_URL = 'https://localhost:3000/globe';
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZTRiMGQxOS0zZTZjLTRhYmYtYmE1ZS1hNjJjNDM1NzNjYmEiLCJpZCI6MzA0NjAsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyIsInByIl0sImlhdCI6MTU5Mzc2MzUwM30.TlS6B0HhmY8gHfLOvZxUzbJnRkoyTEHRXAY9BxlW-E4';
BingMapsApi.defaultKey = 'AiQiXT4OrP9xS0kcXHdTLXdj4MWsfHivbvGTdoyUH5u9yHCe_Xa33FLtPguzAPEI';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
