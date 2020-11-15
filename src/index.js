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
  applicationId: 'b50187cf-e2bc-42d9-b6d9-8f2d70225da1',
  clientToken: 'pub372909ff1b6cd41fc18860502de04bfc',
  site: 'datadoghq.com',
  service: 'ECR-Frontend',
  env: 'prod',
  version: '1.0.0',
  sampleRate: 100,
  trackInteractions: true
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
