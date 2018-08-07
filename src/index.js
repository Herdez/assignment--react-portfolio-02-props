import React from 'react';
import ReactDOM from 'react-dom';
import './project-files/css/styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app-container'));
registerServiceWorker();
