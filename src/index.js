import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import configureStore from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
