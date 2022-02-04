import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';
import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from '@datadog/browser-logs'

datadogRum.init({
  applicationId: '1114dcf3-47fa-4097-afb5-7e3e0b269803',
  clientToken: 'pubcb57ecb280484112b43af6db38140e9f',
  site: 'datadoghq.com',
  service:'emerald-city-runs',
  version: '1.0.3',
  sampleRate: 100,
  trackInteractions: true,
  defaultPrivacyLevel: 'mask-user-input'
});
  
datadogLogs.init({
  clientToken: 'pub372909ff1b6cd41fc18860502de04bfc',
  site: 'datadoghq.com',
  forwardErrorsToLogs: true,
  sampleRate: 100,
  env: 'prod',
  service: 'ECR-Frontend'
})

datadogLogs.logger.info('App initialized')

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
