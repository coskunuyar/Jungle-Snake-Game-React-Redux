import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './redux/rootReducer';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';

const store = createStore(rootReducer);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
