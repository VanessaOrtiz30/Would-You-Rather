import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import store from './configureStore';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root')
);
//registerServiceWorker();
