import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/nav';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// #region agent log
fetch('http://127.0.0.1:7242/ingest/c47125b6-3f95-4729-8178-79134b9839a4',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'index.js:8',message:'App initialization - URL and env check',data:{currentUrl:window.location.href,pathname:window.location.pathname,hostname:window.location.hostname,publicUrl:process.env.PUBLIC_URL,nodeEnv:process.env.NODE_ENV},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,C'})}).catch(()=>{});
// #endregion agent log

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
