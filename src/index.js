import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ActionCableProvider } from 'react-actioncable-provider';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { API_WS_ROOT } from './constants';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router >
      <ActionCableProvider url={API_WS_ROOT}>
        <App />
      </ActionCableProvider>
    </Router >
  </Provider >, document.getElementById('root'));
registerServiceWorker();
